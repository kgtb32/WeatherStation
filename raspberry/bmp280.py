import time
import board

import adafruit_bmp280


i2c = board.I2C()
bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c)


def get_temp():
  i2c = board.I2C()
  bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c)
  return bmp280.temperature

def get_pressure():
  i2c = board.I2C()
  bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c)
  return bmp280.pressure

def get_altitude():
  i2c = board.I2C()
  bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c)
  return bmp280.altitude