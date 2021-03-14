from json import dumps
from flask import Flask, request
from logurl import log_url

app = Flask(__name__)

@app.route('/', methods=['GET'])
def inconspicuous():
    '''
    display a message for users who have stumbled upon this server
    '''
    return "Hi :) nothing bad happening here please close this tab and never come back, thanks."

@app.route('/', methods=['POST'])
def url():
    '''
    logs a url submitted to the server
    '''
    url = request.get_json()['url']
    log_url(url)
    return dumps({'success': True})

if __name__ == "__main__":
    '''
    sets a randomly available port 
    '''
    app.run(port=0)