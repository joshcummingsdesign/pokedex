import json
from flask import Flask, jsonify


app = Flask(__name__)


@app.route("/api/pokemon")
def pokemon():
    response = jsonify({
        'data': [
            {
                'name': 'Pikachu',
                'type': 'Electric'
            },
            {
                'name': 'Charmander',
                'type': 'Fire'
            },
            {
                'name': 'Squirtle',
                'type': 'Water'
            },
            {
                'name': 'Bulbasaur',
                'type': 'Grass'
            },
            {
                'name': 'Jigglypuff',
                'type': 'Normal'
            },
            {
                'name': 'Meowth',
                'type': 'Normal'
            },
            {
                'name': 'Psyduck',
                'type': 'Water'
            },
            {
                'name': 'Snorlax',
                'type': 'Normal'
            },
            {
                'name': 'Mewtwo',
                'type': 'Psychic'
            },
            {
                'name': 'Mew',
                'type': 'Psychic'
            }
        ]
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
