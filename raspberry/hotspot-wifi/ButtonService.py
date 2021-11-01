import RPi.GPIO as GPIO 
import time
import subprocess

#20 - reset WIFI
#21 - complete RESET
#16 - buzzer 
reset = 21
wifi_reset = 20
buzzer = 16

GPIO.setmode(GPIO.BCM)
GPIO.setup(wifi_reset, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(reset, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(buzzer, GPIO.OUT)

while True:
    if GPIO.input(wifi_reset) == GPIO.HIGH:
        print("wifi reset")
        GPIO.output(buzzer, GPIO.HIGH)
        time.sleep(0.5)
        GPIO.output(buzzer, GPIO.LOW)
        time.sleep(0.5)
        GPIO.output(buzzer, GPIO.HIGH)
        time.sleep(0.5)
        GPIO.output(buzzer, GPIO.LOW)
        subprocess.Popen("sudo sh /home/pi/enableHotspot.sh", shell=True)
    if GPIO.input(reset) == GPIO.HIGH:
        print("reset")
        GPIO.output(buzzer, GPIO.HIGH)
        time.sleep(1)
        GPIO.output(buzzer, GPIO.LOW)
        subprocess.Popen("sudo sh /home/pi/enableHotspot.sh", shell=True)
    time.sleep(1)
