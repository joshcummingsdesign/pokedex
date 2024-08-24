import requests
from flask import Flask, jsonify


app = Flask(__name__)


@app.route("/api/pokemon")
def pokemon():
    url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
    res = requests.get(url)
    data = res.json()
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
