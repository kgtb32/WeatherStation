import React, {useEffect, useState} from "react";
import ChartData from "../components/ChartData/ChartData";
import { DataContext } from "../context";
import CsvExport from "../components/DataExport/CsvExport";

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
        if (dataWeather && dataTemperature.length === 0) {
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

                <CsvExport data={data}/>

        </>
    )

}