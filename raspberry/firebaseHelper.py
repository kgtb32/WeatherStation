
import json
import os

def upload_to_firebase(pressure, humidity, temperature):
    meteoData = {
        "pression": pressure,
        "humidity": humidity,
        "temperature": temperature,
    }

    os.system("./fuego --credentials ./credentials.json add meteo %s" % json.dumps(meteoData).__str__()) 