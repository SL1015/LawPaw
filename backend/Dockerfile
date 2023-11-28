FROM python:3.9

WORKDIR /LawPaw/backend

COPY . /LawPaw/backend

# Install Poetry
RUN pip install poetry

# Install the dependencies
RUN poetry config virtualenvs.create false
RUN poetry install --no-dev

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run the scripts when the container launches
CMD ["flask", "--app=flaskapp", "run", "--host=0.0.0.0", "--debug"]
