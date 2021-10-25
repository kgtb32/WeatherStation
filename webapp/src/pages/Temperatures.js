import React, {useEffect, useState} from "react";

import ChartData from "../components/ChartData/ChartData";
import { DataContext } from "../context";

export default function Temperatures() {

    const {
        fetchData, 
        dataWeather
    } = DataContext()
    
    const [dataTemperature, setDataTemperature] = useState([]);
    console.log("🚀 ~ dataTemperature", dataTemperature)

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (dataWeather && dataTemperature.length === 0) {
            let prevState = [...dataTemperature]
            dataWeather.map((e,i)=>
                    prevState.push([e.date, e.temperature])
                )
                console.log("here", dataTemperature)
            setDataTemperature(prevState)
        }
    }, [dataWeather])
    
    const data = 
    {
        label: 'Temperature',
        data: dataTemperature
    }

    return(
        <>
                temperatures
                <ChartData data={data}/>

        </>
    )

}