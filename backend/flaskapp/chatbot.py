import os
from http.client import HTTPException
from flask import Flask, request, jsonify, Blueprint, current_app
from flask_cors import CORS
from langchain.llms import Ollama
import requests
import json
from qdrant_client import QdrantClient
from qdrant_client.http import models
from qdrant_client.http.models import CollectionStatus
import numpy as np


from langchain.chains import LLMChain
from langchain.docstore.document import Document
from langchain.memory import ConversationBufferMemory
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores.faiss import FAISS
from langchain.embeddings import HuggingFaceInstructEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chat_models import ChatOllama
from langchain.llms import HuggingFaceHub
#from langchain import OpenAI
from langchain.prompts import ChatPromptTemplate
import os
import contractions
import pypdfium2 as pdfium
import re
import glob
import unicodedata
from typing import List
#from googletrans import Translator
import time
import json

from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import Qdrant
from langchain.document_loaders import TextLoader
import deepl

from urllib.parse import unquote

from qdrant_client import QdrantClient

from transformers import AutoModel, AutoTokenizer
import torch
#device = 'cuda' if torch.cuda.is_available() else 'cpu'

key_file = json.load(open("deepl_credential.json"))
key_deepl =  key_file['key'][0]
translator = deepl.Translator(key_deepl)

tokenizer_en = AutoTokenizer.from_pretrained("thenlper/gte-small")
model_en = AutoModel.from_pretrained("thenlper/gte-small")
tokenizer_de = AutoTokenizer.from_pretrained("thenlper/gte-base")
model_de = AutoModel.from_pretrained("thenlper/gte-base")

from torch import Tensor
def average_pool(last_hidden_states: Tensor,
                 attention_mask: Tensor) -> Tensor:
  last_hidden = last_hidden_states.masked_fill(~attention_mask[..., None].bool(), 0.0)
  return last_hidden.sum(dim=1) / attention_mask.sum(dim=1)[..., None]

def embedding(text,lang):
    if lang == 'EN-GB':
        batch_dict = tokenizer_en(text, max_length=512, padding=True, truncation=True, return_tensors='pt')
        outputs = model_en(**batch_dict)
    else:
        batch_dict = tokenizer_de(text, max_length=512, padding=True, truncation=True, return_tensors='pt')
        outputs = model_de(**batch_dict)
    embeddings = average_pool(outputs.last_hidden_state, batch_dict['attention_mask'])
    embeddings = embeddings.detach().numpy()
    embeddings = embeddings[0]
    return embeddings

def doc_to_rscope(docs):
    rscope = ""
    links = []
    for doc in docs:
        content = doc.payload['content']
        links.append(doc.payload['link'])
        '''
        if not doc.payload['link']:
            print('test')
            print(content)'''
        rscope += content + "\n\n"
    current_app.logger.debug(links)
    return rscope, links

def get_top_results(hit_lst):
    sorted_Lst = sorted(hit_lst, key=lambda x:x.score,reverse = True)
    return sorted_Lst[:3]

def query_embedding(query,lang,embedding_lang):
    if lang != embedding_lang:
        query = translator.translate_text(query,target_lang=embedding_lang).text
    return embedding(query,embedding_lang)
    
    
def search_db(client,query_vecs,collection):
    hits=client.search(
            collection_name=collection,
            query_vector = query_vecs,
            limit=3
        )
    return hits

def search_context(query,lang,law,kanton):
    hit_lst = []
    client = QdrantClient(url="http://qdrant:6333")
    if kanton != 'all':
        query_vecs_de = query_embedding(query,lang,'DE')
        collection1 = 'swiss-'+kanton
        hits = search_db(client,query_vecs_de,collection1)
        for hit in hits:
            hit.score -= 0.04
        hit_lst+=hits
    if law == 'OR':
        query_vecs_en = query_embedding(query,lang,'EN-GB')
        hits = search_db(client,query_vecs_en,'swiss-or')
        hit_lst+=hits
    elif law == 'ZGB':
        query_vecs_de = query_embedding(query,lang,'DE')
        hits = search_db(client,query_vecs_de,'swiss-de')
        hit_lst+=hits
    else:
        query_vecs_en = query_embedding(query,lang,'EN-GB')
        hits1 = search_db(client,query_vecs_en,'swiss-or')
        query_vecs_de = query_embedding(query,lang,'DE')
        hits2 = search_db(client,query_vecs_de,'swiss-de')
        hit_lst+=hits1
        hit_lst+=hits2
    print(len(hit_lst))
    result = get_top_results(hit_lst)
    return result

import openai
key_openai = json.load(open("openai_credential.json"))
os.environ['OPENAI_API_KEY'] = key_openai['key'][0]

def qa_chatbot(query, lang, law,kanton):
  context_raw = search_context(query, lang,law,kanton)
  for hit in context_raw:
      current_app.logger.info(hit.score)
  context,links = doc_to_rscope(context_raw)
  memory = ConversationBufferMemory(k=10,memory_key='chat_history')
  chat_text = f"""
  You are a legal assistant expert on the Swiss Private Law.
  Summarize your answer exclusively based on the context provided and do the translation as needed. For example, the query can be in English but the context provided can be in German. In this case, translate the context to English and see if an answer can be summarized or provided.
  If an answer can be found in the provided context, please provide a summary of the relevant article(s).
  If the question is not covered by the provided context, please indicate so and start the answer with '!@#$'.
  Context: {context}
  Question: {query}
  """
  prompt_template = ChatPromptTemplate.from_template(chat_text)
  #ollama_llm_chain = LLMChain(prompt=prompt_template, llm=ollama)
  gpt_llm_chain = LLMChain(prompt=prompt_template, llm=llm)
  # answer = ollama_llm_chain.run(context=chat_text,
  #                           query=query,source_links=links)
  answer_gpt = gpt_llm_chain.run(context=chat_text, query=query, source_links=links)
  
  if '!@#$' in answer_gpt:
    answer_gpt = "Whoopsie! It seems we took a detour from the legal zone. Let's hop back to law talk. Ask me anything about contracts, family law, or legal advice!"
  else:
    current_app.logger.info('Answer found.')
    answer_gpt = answer_gpt + f'\n\nFor more information, please check the following links: {links}'
  if lang != 'EN-GB':
    detector = translator.translate_text(query, target_lang="DE")
    answer_gpt = translator.translate_text(answer_gpt, target_lang=detector.detected_source_lang).text
  return answer_gpt


#########
llm = ChatOpenAI(model='gpt-3.5-turbo',temperature = 0.1)

chatbot_blueprint = Blueprint('chatbot', __name__)

# running llm model docker image
ollama = Ollama(base_url='http://ollama:11434',
model="mistral")

# Qdrant host and port
client = QdrantClient(host="qdrant", port=6333)

'''
@chatbot_blueprint.route('/chatbot', methods=['GET'])
def test_connection():
   current_app.logger.info(qa_chatbot('How long is the maternity leave?'))
   return qa_chatbot('How long is the maternity leave?')
'''

@chatbot_blueprint.route('/chatbot', methods=['POST'])
def getResponse():
    # Get the message from the JSON request
    data = request.get_json()
    user_message = data.get('message')
    lang = data.get('lang')
    law = data.get('law')
    kanton = data.get('kanton')
    current_app.logger.info(law)
    current_app.logger.info(kanton)
    # If there's no message provided, return an error message
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    response = qa_chatbot(user_message, lang, law, kanton)
    return response

    
@chatbot_blueprint.errorhandler(Exception)
def handle_exception(e):
# pass through HTTP errors
    current_app.logger.exception(e)
    if isinstance(e, HTTPException):
        return e
    return jsonify(error=str(e)), 500
