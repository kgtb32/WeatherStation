import React, {useEffect, useState} from "react";
import ChartData from "./ChartData/ChartData";
import { DataContext } from "../context";
import CsvExport from "../components/DataExport/CsvExport";
import { Dropdown, Container, Row, Col} from "react-bootstrap";
import dayjs from "dayjs";

export default function Graph({dataName}) {

    const {
        fetchDataRangeDate, 
        dataWeather
    } = DataContext()
    
    const [dataGraph, setDataGraph] = useState([]);
    const [buttonDate, setButtonDate] = useState("Dernières 24 heures");
    const [datePicked, setDatePicked] = useState(dayjs().subtract(1, 'day').unix());
    const [color, setColor] = useState();

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
            setDataGraph(prevState)
        }
    }, [dataWeather])
    
    const data = 
    {
        label: dataName,
        data: dataGraph
    }

    return(
        <>
            <div className="buttons_bars">
                <Dropdown style={{marginRight: "15px"}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {buttonDate}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={(e) => handleChangeDatePick('day', e.target.text)}>Dernières 24 heures</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleChangeDatePick('week', e.target.text)}>7 derniers jours</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleChangeDatePick('month', e.target.text)}>30 derniers jours</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <CsvExport data={data}/>
            </div>
            <ChartData data={data} fullDate={true} color={color}/>
        </>
    )

}