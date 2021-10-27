from flask import Flask, render_template, request, jsonify
from utils.utils import write_file, convert_nmcli_to_obj
import json
import subprocess

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

@app.route('/template/upload_credentials')
def template_upload_credentials():
    return render_template('template_upload_credentials.html')

@app.route('/cred/set', methods= ['POST'])
def cred_set():
    file = request.files['file']
    file.save("/tmp/credentials.json")
    return jsonify(success=True)
    
@app.route('/wifi/list', methods=['GET'])
def wifi_list():
    result = subprocess.run("nmcli -c no --fields SSID,SIGNAL,SECURITY, --mode multiline dev wifi list", shell=True, stdout=subprocess.PIPE).stdout.decode('utf-8').split("\n")
    return jsonify(convert_nmcli_to_obj(result))