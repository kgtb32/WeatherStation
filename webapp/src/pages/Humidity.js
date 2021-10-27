import React, {useEffect, useState} from "react";
import ChartData from "../components/ChartData/ChartData";
import { DataContext } from "../context";
import CsvExport from "../components/DataExport/CsvExport";
import dayjs from "dayjs";
import { Dropdown } from "react-bootstrap";

export default function Humidity() {

    const {
        fetchData, 
        dataWeather
    } = DataContext()
    
    const [dataHumidity, setDataHumidity] = useState([]);
    const [buttonDate, setButtonDate] = useState("Dernières 24 heures");
    const [datePicked, setDatePicked] = useState(dayjs().subtract(1, 'day').unix());

    const handleChangeDatePick = (datePicked, text) => {
        const dateToRequest = dayjs().subtract(1, datePicked).unix()
        setDatePicked(dateToRequest)
        setButtonDate(text)
    }

    useEffect(() => {
        fetchData(datePicked)
    }, [datePicked])

    useEffect(() => {
        if (dataWeather) {
            let prevState = []
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
                <ChartData data={data}/>
                <CsvExport data={data}/>

        </>
    )

}