from http.client import HTTPException
import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from qdrant_client import QdrantClient
import numpy as np
import httpx


db = SQLAlchemy()

def create_app():
    # create and configure the app
    app = Flask(__name__)
    DB_URI = 'mysql+pymysql://root:1phy187@localhost:3306/users'
    app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
    app.config['SECRET_KEY'] = 'dev'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    # show executed SQL command
    app.config['SQLALCHEMY_ECHO'] = True
    app.logger.info(httpx.__version__)
    db.init_app(app)

    # Import models here to register them with SQLAlchemy
    from . import models

    # Create the database tables for our data models
    with app.app_context():
        db.create_all()

    query_vector = np.random.rand(384)
    CollectionName = 'swiss-or'
    client = QdrantClient(host="localhost", port=6333)
    hits = client.search(
        collection_name="swiss-or",
        query_vector=query_vector,
        limit=5  # Return 5 closest points
    )
    app.logger.info(hits)
    

    # Import and register blueprints
    from .auth import auth_blueprint
    from .chatbot import chatbot_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
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
