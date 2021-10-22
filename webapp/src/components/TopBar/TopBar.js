import { render } from '@testing-library/react';
import React,{useEffect, useState} from 'react';
import {DataContext} from '../../context'
import thermometer from '../../logo_weather/thermometer-50.svg'
import wet from '../../logo_weather/wet.svg'
import tornado from '../../logo_weather/tornado.svg'



export default function TopBar () {

    const {
        fetchData, 
        dataWeather} = DataContext()

    const [temperature, setTemprature] = useState();
    const [pressure, setPressure] = useState();
    const [humidity, setHumidity] = useState();

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (dataWeather.length > 0) {
            setTemprature(dataWeather[dataWeather.length - 1].temperature)
            setPressure(dataWeather[dataWeather.length - 1].pressure)
            setHumidity(dataWeather[dataWeather.length - 1].humidity)
        }
    }, [dataWeather])

    return (
        <>
            <div className="topbar_data_container">
                <img src={thermometer} className="App-logo" alt="logo" />
                {temperature}
            </div>
            <div className="topbar_data_container">
                <img src={wet} className="App-logo" alt="logo" />
                {humidity}
            </div>
            <div className="topbar_data_container">
                <img src={tornado} className="App-logo" alt="logo" />
                {pressure}
            </div>
        </>
    )
}