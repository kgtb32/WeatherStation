import React,{useEffect} from 'react';
import {DataContext} from './context'
import cloudSun from './logo_weather/cloud-sun.svg'
import cloudRain from './logo_weather/cloud-rain.svg'
import cloud from './logo_weather/cloud.svg'
import sun from './logo_weather/sun.svg'
import thermometer from './logo_weather/thermometer-50.svg'
import rain from './logo_weather/rain.svg'
import './App.css'
import TopBar from './components/TopBar/TopBar';

function App() {
  const {
    fetchDataRangeDate,
    dataWeather} = DataContext()


  return (

    <TopBar />
    
  );
}

export default App;