import RPi.GPIO as GPIO
import dht11
pin=4

def initializeResult():
        instance = dht11.DHT11(pin)
        result = instance.read()
        return result

def getTemperature():
    try:
        return initializeResult().temperature
    except RuntimeError as error:
        print(error.args)

def getHumidity():
    try:
        return initializeResult().humidity
    except RuntimeError as error:
        print(error.args)
    