import os
from flask import Flask, request, jsonify, Blueprint, current_app
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

'''llm model'''
from transformers import AutoModel, AutoTokenizer
import torch
#device = 'cuda' if torch.cuda.is_available() else 'cpu'
tokenizer = AutoTokenizer.from_pretrained("thenlper/gte-small")
model = AutoModel.from_pretrained("thenlper/gte-small")

import openai
key_openai = json.load(open("C:\HacknLead\lawPaw\openai_credential.json"))
os.environ['OPENAI_API_KEY'] = key_openai['key'][0]

from torch import Tensor
def average_pool(last_hidden_states: Tensor,
                 attention_mask: Tensor) -> Tensor:
    last_hidden = last_hidden_states.masked_fill(~attention_mask[..., None].bool(), 0.0)
    return last_hidden.sum(dim=1) / attention_mask.sum(dim=1)[..., None]

def query_to_vec(query):
  batch_dict = tokenizer(query, max_length=512, padding=True, truncation=True, return_tensors='pt')

  outputs = model(**batch_dict)
  embeddings = average_pool(outputs.last_hidden_state, batch_dict['attention_mask'])
  embeddings = embeddings.detach().numpy()
  embeddings = embeddings[0]

  return embeddings

def doc_to_rscope(docs):
  rscope = ""
  for doc in docs:
    test = doc.payload['content']
    current_app.logger.info(test)
    rscope += test + "\n\n"
  return rscope

from qdrant_client import QdrantClient
def search_context(query):
  query_vector = query_to_vec(query)
  client = QdrantClient(host="localhost", port=6333)
  hits = client.search(
        collection_name="swiss-or",
        query_vector=query_vector,
        limit=5  # Return 5 closest points
    )
  return hits

#search_context('How long is the maternity leave?')
def qa_chatbot(query):
  context_raw = search_context(query)
  context = doc_to_rscope(context_raw)
  memory = ConversationBufferMemory(k=10,memory_key='chat_history')
  chat_text = """
  You are a legal assistant expert on the Swiss Code of Obligations.
  Answer questions related to contract law, employment regulations,
  or corporate obligations.
  Base your answers exclusively on the provided top 5 articles from the Swiss Code of Obligations.
  Please provide a summary of the relevant article(s), along with the source link(s) for reference.
  If an answer is not explicitly covered in the provided context, please indicate so.
  Context: {context}
  Question: {query}
  """
  llm = ChatOpenAI(model='gpt-3.5-turbo',temperature = 0.1)
  prompt_template = ChatPromptTemplate.from_template(chat_text)
  chatgpt_llm_chain = LLMChain(prompt=prompt_template, llm=llm)
  answer = chatgpt_llm_chain.run(context=chat_text,
                            query=query)
  return answer
#########


chatbot_blueprint = Blueprint('chatbot', __name__)

# running llm model docker image
ollama = Ollama(base_url='http://localhost:11434',
model="mistral")

# Qdrant host and port
CollectionName = 'swiss-or'
client = QdrantClient(host="localhost", port=6333)

@chatbot_blueprint.route('/chatbot', methods=['GET'])
def test_connection():
   current_app.logger.info(qa_chatbot('How long is the maternity leave?'))
   return qa_chatbot('How long is the maternity leave?')
   '''query_vector = np.random.rand(384)
   client = QdrantClient(host="localhost", port=6333)
   hits = client.search(
        collection_name="swiss-or",
        query_vector=query_vector,
        limit=5  # Return 5 closest points
    )
   return hits'''
   

@chatbot_blueprint.route('/chatbot', methods=['POST'])
def getResponse():
    #request = "introduce yourself"
    # Get the message from the JSON request
    data = request.get_json()
    user_message = data.get('message')
    current_app.logger.info(qa_chatbot(user_message))
    # If there's no message provided, return an error message
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    #response = ollama(user_message)
    response = qa_chatbot(user_message)

    '''
    query_vector = np.random.rand(384)
    CollectionName = 'swiss-or'
    client = QdrantClient(host="localhost", port=6333)
    hits = client.search(
        collection_name="swiss-or",
        query_vector=query_vector,
        limit=5  # Return 5 closest points
    )'''
    
    return response
    