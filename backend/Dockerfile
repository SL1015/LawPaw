FROM python:3.9

WORKDIR /LawPaw/backend

COPY . /LawPaw/backend

RUN pip install --no-cache-dir Cython

RUN pip install --no-cache-dir -r requirements.txt

RUN flask --app flaskapp run --debug