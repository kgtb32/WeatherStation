
import json
import os

def upload_to_firebase(pressure, humidity, temperature):
    meteoData = {
        "pression": pressure,
        "humidity": humidity,
        "temperature": temperature,
    }

    os.system("/home/pi/WeatherStation/raspberry/fuego --credentials /home/pi/WeatherStation/raspberry/credentials.json add meteo '%s'" % json.dumps(meteoData).__str__())