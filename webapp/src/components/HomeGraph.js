import React, {useEffect, useState} from "react";
import ChartData from "./ChartData/ChartData";
import { DataContext } from "../context";
import dayjs from "dayjs";

export default function HomeGraph({dataName}) {

    const {
        fetchDataRangeDate,
        dataWeather
    } = DataContext()
    
    const [dataTemperature, setDataTemperature] = useState([]);
    
    useEffect(() => {
        const last24h = dayjs().subtract(1, 'day').unix()
        fetchDataRangeDate(last24h, false)
    }, [])

    useEffect(() => {
        if (dataWeather) {
            let prevState = []
            if (dataName === 'temperature') {
                dataWeather.map((e,i)=>
                    prevState.push([e.date, e.temperature])
                )
            }
            if (dataName === 'humidity') {
                dataWeather.map((e,i)=>
                    prevState.push([e.date, e.humidity])
                )
            }
            if (dataName === 'pressure') {
                dataWeather.map((e,i)=>
                    prevState.push([e.date, e.pressure])
                )
            }
            setDataTemperature(prevState)
        }
    }, [dataWeather])
    
    const data = 
    {
        label: dataName,
        data: dataTemperature
    }

    return(
        <>
            <ChartData data={data} fullDate={false}/>
        </>
    )

}