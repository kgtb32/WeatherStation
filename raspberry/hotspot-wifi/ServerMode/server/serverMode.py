from flask import Flask, render_template, request, jsonify
from utils.utils import write_file, convert_nmcli_to_obj
from flask_cors import CORS
import RPi.GPIO as GPIO 
import time
import json
import subprocess

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

buzzer = 16
GPIO.setmode(GPIO.BCM)
GPIO.setup(buzzer, GPIO.OUT)


app.static_folder =  'build/'

@app.route('/')
def index():
    fref = open(r'build/index.html')
    html_text = fref.read()
    fref.close()
    return html_text

@app.route('/basic/settings/set', methods = ['POST'])
def basic_settings_set():
    loc = request.get_json().get('location')
    send_interval = request.get_json().get('send_interval')
    if((loc==None or loc=='') or (send_interval==None or send_interval=='')):
        return jsonify(success=False)
    else:
        write_file("/home/pi/WeatherStation/raspberry/config.json", json.dumps({"location": loc, "interval": send_interval}))
        return jsonify(success=True)

@app.route('/cred/set', methods= ['POST'])
def cred_set():
    try:
        file = request.files['file']
        file.save("/home/pi/WeatherStation/raspberry/credentials.json")
        return jsonify(success=True)
    except:
        return jsonify(success=False)
    
@app.route('/wifi/set', methods=['POST'])
def wifi_set():
    ssid = request.get_json().get('ssid')
    password = request.get_json().get('password')
    GPIO.output(buzzer, GPIO.HIGH)
    time.sleep(0.5)
    GPIO.output(buzzer, GPIO.LOW)
    time.sleep(0.5)
    GPIO.output(buzzer, GPIO.HIGH)
    time.sleep(0.5)
    GPIO.output(buzzer, GPIO.LOW)
    subprocess.Popen("sudo cp /home/pi/WeatherStation/raspberry/hotspot-wifi/wpa_supplicant.conf /etc/wpa_supplicant/wpa_supplicant.conf", shell=True)
    subprocess.Popen("sudo echo '\"network={\nssid=\""+ssid+"\"\npsk=\""+password+"\"\n}' >> /etc/wpa_supplicant/wpa_supplicant.conf", shell=True)
    subprocess.Popen(["sudo sh /home/pi/WeatherStation/raspberry/hotspot-wifi/disableHotspot.sh", ssid, "password", password], shell=True)
    return jsonify(success=True)
