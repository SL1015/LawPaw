import os
from flask import Flask, request, jsonify, Blueprint, current_app
from flask_cors import CORS
from langchain.llms import Ollama
import requests
import json
from qdrant_client import QdrantClient
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

'''llm model'''
from transformers import AutoModel, AutoTokenizer
import torch
#device = 'cuda' if torch.cuda.is_available() else 'cpu'

tokenizer_en = AutoTokenizer.from_pretrained("thenlper/gte-small")
model_en = AutoModel.from_pretrained("thenlper/gte-small")
tokenizer_de = AutoTokenizer.from_pretrained("thenlper/gte-base")
model_de = AutoModel.from_pretrained("thenlper/gte-base")



from torch import Tensor
def average_pool(last_hidden_states: Tensor,
                 attention_mask: Tensor) -> Tensor:
    last_hidden = last_hidden_states.masked_fill(~attention_mask[..., None].bool(), 0.0)
    return last_hidden.sum(dim=1) / attention_mask.sum(dim=1)[..., None]

def query_to_vec(query, lang):
  if lang == 'en':
    batch_dict = tokenizer_en(query, max_length=512, padding=True, truncation=True, return_tensors='pt')
    outputs = model_en(**batch_dict)
  elif lang == 'de':
    batch_dict = tokenizer_de(query, max_length=512, padding=True, truncation=True, return_tensors='pt')
    outputs = model_de(**batch_dict)

  embeddings = average_pool(outputs.last_hidden_state, batch_dict['attention_mask'])
  embeddings = embeddings.detach().numpy()
  embeddings = embeddings[0]


  return embeddings

def doc_to_rscope(docs):
  rscope = ""
  links = []
  for doc in docs:
    test = doc.payload['content']
    links.append(doc.payload['link'])
    #current_app.logger.info(test)
    rscope += test + "\n\n"
  return rscope,links

from qdrant_client import QdrantClient
def search_context(query, lang):
  query_vector = query_to_vec(query, lang)
  client = QdrantClient(host="localhost", port=6333)
  if lang == 'en':
    collections="swiss-or"
  elif lang == 'de':
    collections="swiss-de"
  hits = client.search(
          collection_name=collections,
          query_vector=query_vector,
          limit=5  # Return 5 closest points
      )
  return hits

# deepl_auth_key = cfg['deepl_auth_key']
# translator = deepl.Translator(deepl_auth_key)
# text = "Hello I am loving this pasta"
# result = translator.translate_text(text, target_lang="DE")
# print(result.text)
# print(result.detected_source_lang)

#search_context('How long is the maternity leave?')
key_file = json.load(open("deepl_credential.json"))
#os.environ['DEEPL_AUTH_KEY'] = key_file['key'][0]
key_deepl =  key_file['key'][0]
translator = deepl.Translator(key_deepl)
def qa_chatbot(query, lang):
  context_raw = search_context(query, lang)
  current_app.logger.info(context_raw)
  context,links = doc_to_rscope(context_raw)
  memory = ConversationBufferMemory(k=10,memory_key='chat_history')
  ollama = ChatOllama(base_url='http://localhost:11434', model="mistral", temperature=0.1)
  #TODO: language specific prompt engineering
  chat_text = """
  You are a legal assistant expert on the Swiss Code of Obligations.
  Answer questions related to contract law, employment regulations,
  or corporate obligations.
  Base your answers exclusively on the provided top 3 articles from the Swiss Code of Obligations.
  Please provide a summary of the relevant article(s), along with the source link(s) for reference.
  The souce link(s) should be from the following collection {source_links}, if none of the links works, just don't provide the information.
  If an answer is not explicitly covered in the provided context, please provide the following message: Whoopsie! It seems we took a detour from the legal zone. Let's hop back to law talk. Ask me anything about contracts, family law, or legal advice!
  If the source link is not available, simply provide the code number in which the user can use as a reference.
  Context: {context}
  Question: {query}
  """
  #llm = ChatOpenAI(model='gpt-3.5-turbo',temperature = 0.1)
  prompt_template = ChatPromptTemplate.from_template(chat_text)
  #chatgpt_llm_chain = LLMChain(prompt=prompt_template, llm=llm)
  ollama_llm_chain = LLMChain(prompt=prompt_template, llm=ollama)
  answer = ollama_llm_chain.run(context=chat_text,
                            query=query,source_links=links)
  detector = translator.translate_text(query, target_lang="DE")
  if lang == 'en':
    pass
  else:
    answer = translator.translate_text(answer, target_lang=detector.detected_source_lang).text
  return answer
#########


chatbot_blueprint = Blueprint('chatbot', __name__)

# running llm model docker image
ollama = Ollama(base_url='http://localhost:11434',
model="mistral")

# Qdrant host and port
client = QdrantClient(host="localhost", port=6333)

'''
@chatbot_blueprint.route('/chatbot', methods=['GET'])
def test_connection():
   current_app.logger.info(qa_chatbot('How long is the maternity leave?'))
   return qa_chatbot('How long is the maternity leave?')
'''

@chatbot_blueprint.route('/chatbot', methods=['POST'])
def getResponse():
    #request = "introduce yourself"
    # Get the message from the JSON request
    data = request.get_json()
    user_message = data.get('message')
    lang = data.get('lang')
    current_app.logger.info(lang)
    # If there's no message provided, return an error message
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    #response = ollama(user_message)
    response = qa_chatbot(user_message, lang)
    #current_app.logger.info(response)
    return response





    