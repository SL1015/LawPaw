from http.client import HTTPException
import os
from flask import Flask, jsonify
from qdrant_client import QdrantClient
import numpy as np
import httpx
from flask_cors import CORS


def create_app():
    # create and configure the app
    app = Flask(__name__)
    CORS(app)

    app.logger.info(httpx.__version__)

    # query_vector = np.random.rand(384)
    # CollectionName = 'swiss-or'
    # client = QdrantClient(host="localhost", port=6333)
    # hits = client.search(
    #     collection_name="swiss-or",
    #     query_vector=query_vector,
    #     limit=5  # Return 5 closest points
    # )
    # app.logger.info(hits)
    

    # Import and register blueprints
    from .chatbot import chatbot_blueprint
    app.register_blueprint(chatbot_blueprint)


    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    @app.errorhandler(Exception)
    def handle_exception(e):
    # pass through HTTP errors
        if isinstance(e, HTTPException):
            return e
    # now you're handling non-HTTP exceptions only
        return jsonify(error=str(e)), 500
    
    return app
