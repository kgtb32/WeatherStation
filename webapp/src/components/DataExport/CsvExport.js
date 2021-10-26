import { CSVLink, CSVDownload } from "react-csv";

export default function CsvExport (data) {

    return (
        <>
            <CSVLink data={data.data.data} filename={data.data.label + "_weather_data.csv"}>Exporter en CSV </CSVLink>
        </>
    )

}