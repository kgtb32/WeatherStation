import RPi.GPIO as GPIO
import dht11
pin=4

def initializeResult():
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BCM)
        GPIO.cleanup()
        instance = dht11.DHT11(pin)
        result = instance.read()
        return result

def getTemperature():
    try:
        return initializeResult().temperature
    except RuntimeError as error:
        return error.args

def getHumidity():
    try:
        return initializeResult().humidity
    except RuntimeError as error:
        return error.args
    