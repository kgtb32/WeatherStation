from dht11_lib import *
from bmp280 import *
from firebaseHelper import *
import time

lastUpdate = 0

while True:
    lastUpdate = upload_to_firebase(get_pressure(), getHumidity(), get_temp(), lastUpdate)
    print("Sending to firebase")
    time.sleep(30)