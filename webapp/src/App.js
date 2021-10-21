import cloudSun from './logo_weather/cloud-sun.svg'
import cloudRain from './logo_weather/cloud-rain.svg'
import cloud from './logo_weather/cloud.svg'
import sun from './logo_weather/sun.svg'
import thermometer from './logo_weather/thermometer-50.svg'
import rain from './logo_weather/rain.svg'
import './App.css';
import React,{useEffect, useState, useContext} from 'react';
import app from './config/firebase.js';
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import {DataContext} from './context'

function App() {
  const {
    fetchData, 
    dataWeather} = DataContext()

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="Logo_grid">
        <img src={cloud} className="App-logo" alt="logo" />
        <img src={cloudSun} className="App-logo" alt="logo" />
        <img src={cloudRain} className="App-logo" alt="logo" />
        <img src={sun} className="App-logo" alt="logo" />
        <img src={thermometer} className="App-logo" alt="logo" />
        <img src={rain} className="App-logo" alt="logo" />
        {dataWeather.map(e =>
        <div className="container"> 
          <div className="data_label">Temp : {e.temperature}</div>
          {/* <div className="data_label">Pression : {e.pression}</div>
          <div className="data_label">Humidité : {e.humidity}</div> */}
        </div>
          )}
    </div>
  );
}

export default App;