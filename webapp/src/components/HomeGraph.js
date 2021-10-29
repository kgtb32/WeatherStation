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
    const [color, setColor] = useState();
    
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
                setColor('rgb(255, 51, 51)')
            }
            if (dataName === 'humidity') {
                dataWeather.map((e,i)=>
                    prevState.push([e.date, e.humidity])
                )
                setColor('rgb(51, 116, 255)')
            }
            if (dataName === 'pressure') {
                dataWeather.map((e,i)=>
                    prevState.push([e.date, e.pressure])
                )
                setColor('rgb(51, 255, 57)')
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
            <ChartData data={data} fullDate={false} color={color}/>
        </>
    )

}