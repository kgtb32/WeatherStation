import React, {useEffect, useState} from "react";
import ChartData from "../components/ChartData/ChartData";
import { DataContext } from "../context";
import CsvExport from "../components/DataExport/CsvExport";

export default function Pressure() {

    const {
        fetchData, 
        dataWeather
    } = DataContext()
    
    const [dataPressure, setDataPressure] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (dataWeather && dataPressure.length === 0) {
            let prevState = [...dataPressure]
            dataWeather.map((e,i)=>
                    prevState.push([e.date, e.pressure])
                )
            setDataPressure(prevState)
        }
    }, [dataWeather])
    
    const data = 
    {
        label: 'Pression atomosphérique',
        data: dataPressure
    }

    return(
        <>
                Pression atomosphérique
                <ChartData data={data}/>
                <CsvExport data={data}/>

        </>
    )

}