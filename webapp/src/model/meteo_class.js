export default class meteo{
  constructor(humidity, temperature, pression) { 
    this._humidity = humidity; 
    this._temperature = temperature;
    this._pression=pression;
 }

  get getHumidity() {
    return this._humidity;
  }

  set setHumidity(humidity) {
    this._humidity = humidity;
  }

  get getTemperature() {
    return this._temperature;
  }

  set setTemperature(temperature) {
    this._temperature = temperature;
  }

  get getPression() {
    return this._pression;
  }

  set setPression(pression) {
    this._pression = pression;
  }
}