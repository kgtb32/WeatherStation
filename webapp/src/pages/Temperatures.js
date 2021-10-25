import React, {useEffect, useState} from "react";

import ChartData from "../components/ChartData/ChartData";
import { DataContext } from "../context";

export default function Temperatures() {

    const {
        fetchData, 
        dataWeather
    } = DataContext()
    
    const [dataTemperature, setDataTemperature] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (dataWeather) {
            let prevState = [...dataTemperature]
            dataWeather.map((e,i)=>
                    prevState.push([e.date, e.temperature])
                )
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