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
    fetchData,
    dataWeather} = DataContext()


  return (

    <TopBar />
    
    // <div className="Logo_grid">
    //     <img src={cloud} className="App-logo" alt="logo" />
    //     <img src={cloudSun} className="App-logo" alt="logo" />
    //     <img src={cloudRain} className="App-logo" alt="logo" />
    //     <img src={sun} className="App-logo" alt="logo" />
    //     <img src={thermometer} className="App-logo" alt="logo" />
    //     <img src={rain} className="App-logo" alt="logo" />
    //     {dataWeather.map(e =>
    //     <div className="container"> 
    //       <div className="data_label">Temp : {e.temperature}</div>
    //       {/* <div className="data_label">Pression : {e.pression}</div>
    //       <div className="data_label">Humidité : {e.humidity}</div> */}
    //     </div>
    //       )}
    // </div>
  );
}

export default App;