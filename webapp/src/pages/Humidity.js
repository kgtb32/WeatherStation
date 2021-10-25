import React, {useEffect, useState} from "react";

import ChartData from "../components/ChartData/ChartData";
import { DataContext } from "../context";

export default function Humidity() {

    const {
        fetchData, 
        dataWeather
    } = DataContext()
    
    const [dataHumidity, setDataHumidity] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (dataWeather && dataHumidity.length === 0) {
            let prevState = [...dataHumidity]
            dataWeather.map((e,i)=>
                    prevState.push([e.date, e.humidity])
                )
            setDataHumidity(prevState)
        }
    }, [dataWeather])
    
    const data = 
    {
        label: 'Humidité',
        data: dataHumidity
    }

    return(
        <>
                Humidité
                <ChartData data={data}/>

        </>
    )

}