import React, {useEffect, useState} from "react";
import ChartData from "./ChartData/ChartData";
import { DataContext } from "../context";
import CsvExport from "../components/DataExport/CsvExport";
import { Dropdown } from "react-bootstrap";
import dayjs from "dayjs";

export default function Graph({dataName}) {

    const {
        fetchDataRangeDate, 
        dataWeather
    } = DataContext()
    
    const [dataTemperature, setDataTemperature] = useState([]);
    const [buttonDate, setButtonDate] = useState("Dernières 24 heures");
    const [datePicked, setDatePicked] = useState(dayjs().subtract(1, 'day').unix());

    const handleChangeDatePick = (datePicked, text) => {
        const dateToRequest = dayjs().subtract(1, datePicked).unix()
        setDatePicked(dateToRequest)
        setButtonDate(text)
    }

    useEffect(() => {
        fetchDataRangeDate(datePicked, true)
    }, [datePicked])

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
            {dataName}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {buttonDate}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={(e) => handleChangeDatePick('day', e.target.text)}>Dernières 24 heures</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => handleChangeDatePick('week', e.target.text)}>7 derniers jours</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => handleChangeDatePick('month', e.target.text)}>30 derniers jours</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <ChartData data={data} fullDate={true}/>

            <CsvExport data={data}/>

        </>
    )

}