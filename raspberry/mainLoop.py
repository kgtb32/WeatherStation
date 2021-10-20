from dht11_lib import *
from bmp280 import *
from firebaseHelper import *
import time

while True:
    firebaseHelper.upload_to_firebase(get_pressure(), getHumidity(), get_temp())
    print("Sending to firebase")
    time.sleep(30)