import React from 'react'

import cloudSun from './logo_weather/cloud-sun.svg'
import cloudRain from './logo_weather/cloud-rain.svg'
import cloud from './logo_weather/cloud.svg'
import sun from './logo_weather/sun.svg'
import thermometer from './logo_weather/thermometer-50.svg'
import rain from './logo_weather/rain.svg'
import './App.css';
import React,{useEffect, useState} from 'react';
import app from './config/firebase.js';
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import meteo from './model/meteo_class.js';

function App() {
  const [meteo, setMeteo] = useState([{humidity:"", pression:"", temperature:""}]);
  
  const fetchMeteo=async()=>{
    const db = getFirestore(app);
    // const meteoCollection = collection(db, 'meteo');
    // const meteoSnapshot = await getDocs(meteoCollection);
    // const meteoList = meteoSnapshot.docs.map(doc => doc.data());
    // console.log(meteoList.map(e => e))
    
    const q = query(collection(db, "meteo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log("doc",doc)
        setMeteo([...meteo,doc.data()])
        console.log("doc.data",doc.data())
      });

    });
  }

  useEffect(() => {
    fetchMeteo();
  }, [])

  return (
    <div className="Logo_grid">
        <img src={cloud} className="App-logo" alt="logo" />
        <img src={cloudSun} className="App-logo" alt="logo" />
        <img src={cloudRain} className="App-logo" alt="logo" />
        <img src={sun} className="App-logo" alt="logo" />
        <img src={thermometer} className="App-logo" alt="logo" />
        <img src={rain} className="App-logo" alt="logo" />
        <p>{meteo.map((doc)=>doc.humidity)}</p>
    </div>
  );
}

export default App;