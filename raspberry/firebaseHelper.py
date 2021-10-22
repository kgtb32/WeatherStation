
import json
import os
import subprocess

def upload_to_firebase(pressure, humidity, temperature, lastUpdate):
    dateEpoch = subprocess.run(["date","-u","+%s"], stdout=subprocess.PIPE).stdout.decode('utf-8').replace('\n','')
    dateHour = subprocess.run(["date","-u", "+%H"], stdout=subprocess.PIPE).stdout.decode('utf-8').replace('\n','')
    shouldValBeUsed = False

    vals = [[0,6], [1,12],[2,18],[3,23]]

    for val in vals:
        if(int(dateHour) >= val[1] and (lastUpdate == val[0] or lastUpdate < val[0])):
            lastUpdate += 1
            shouldValBeUsed = True
            break
    if (lastUpdate > 3):
        lastUpdate = 0

    meteoData = {
        "pressure": pressure,
        "humidity": humidity,
        "temperature": temperature,
        "dateEpoch": dateEpoch,
        "shouldValBeUsed": shouldValBeUsed
    }

    os.system("/home/pi/WeatherStation/raspberry/fuego --credentials /home/pi/WeatherStation/raspberry/credentials.json add meteo '%s'" % json.dumps(meteoData).__str__())
    return lastUpdate