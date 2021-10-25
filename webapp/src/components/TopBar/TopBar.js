import React, { useEffect, useState } from "react";
import { DataContext } from "../../context";

import thermometer from "../../logo_weather/thermometer-50.svg";
import wet from "../../logo_weather/wet.svg";
import tornado from "../../logo_weather/tornado.svg";

import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TopBar() {
  const { fetchData, dataWeather } = DataContext();

  const [temperature, setTemprature] = useState();
  const [pressure, setPressure] = useState();
  const [humidity, setHumidity] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (dataWeather.length > 0) {
      setTemprature(Number(dataWeather[dataWeather.length - 1].temperature));
      setPressure(Number(dataWeather[dataWeather.length - 1].pressure));
      setHumidity(Number(dataWeather[dataWeather.length - 1].humidity));
    }
  }, [dataWeather]);
//#687eb6

  return (
          <Navbar style={ styles.navbar } className="justify-content-around" variant="dark" sticky="top">
            
              <Navbar.Brand>
                  <span style={styles.overlay}>
                    <img
                      alt=""
                      src={thermometer}
                      width="30"
                      height="30"
                      style={styles.image}
                      className="d-inline-block align-top"
                    />{temperature?temperature.toFixed(2):''}
                  </span>
                  <span style={styles.overlay}>
                    <img
                      alt=""
                      src={wet}
                      width="30"
                      height="30"
                      className="d-inline-block align-top "
                      style={styles.image}
                    />{humidity?humidity.toFixed(2):''}
                  </span>
                  <span style={styles.overlay}>
                    <img
                      alt=""
                      src={tornado}
                      width="30"
                      height="30"
                      style={styles.image}
                      className="d-inline-block align-top"
                    />{pressure?pressure.toFixed(2):''}
                  </span>
              </Navbar.Brand>
      </Navbar>
  );
}


const styles = {
  navbar:{
    background: '#273c75'
  },
  image:{
    filter: 'invert(1)', marginRight: '5px'
  },
  overlay:{
    backgroundColor: '#192a56',
              padding: '2px 10px',
              color: '#fffff',
              borderRadius: 3,
              marginRight:'4px'
  }
}
