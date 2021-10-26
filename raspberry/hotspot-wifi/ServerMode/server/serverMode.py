from flask import Flask, render_template, request, jsonify
from utils.utils import write_file
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/basic/settings/set', methods = ['POST'])
def basic_settings_set():
    loc = request.form.get('location')
    send_interval = request.form.get('send_interval')
    if(loc == '' or send_interval == ''):
        return jsonify(success=False)
    else:
        write_file("/tmp/config.json", json.dumps({"location": loc, "interval": send_interval}))
        return jsonify(success=True)
    