import React from 'react'

import cloudSun from './logo_weather/cloud-sun.svg'
import cloudRain from './logo_weather/cloud-rain.svg'
import cloud from './logo_weather/cloud.svg'
import sun from './logo_weather/sun.svg'
import thermometer from './logo_weather/thermometer-50.svg'
import rain from './logo_weather/rain.svg'
import './App.css';

function App() {
  return (
    <div className="Logo_grid">
        <img src={cloud} className="App-logo" alt="logo" />
        <img src={cloudSun} className="App-logo" alt="logo" />
        <img src={cloudRain} className="App-logo" alt="logo" />
        <img src={sun} className="App-logo" alt="logo" />
        <img src={thermometer} className="App-logo" alt="logo" />
        <img src={rain} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;