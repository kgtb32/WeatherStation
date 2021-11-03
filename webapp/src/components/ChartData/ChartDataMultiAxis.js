import React from 'react';
import { Line } from 'react-chartjs-2';


export default function ChartDataMultiAxis({data}) {

  const dataDisplay = {
    labels : data.map(e => e.date.split(",")[1]),
    datasets : [
      {
        label: 'temperature (°C)',
        data : data.map(e => e.temperature),
        fill: false,
        backgroundColor: 'rgb(255, 51, 51)',
        borderColor: 'rgba(255, 51, 51, 0.2)',
        yAxisID: 'y-axis-1',
    },
    {
      label: 'humidité (%)',
      data : data.map(e => e.humidity),
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
    {
      label: 'pression (Hpa)',
      data : data.map(e => e.pressure),
      fill: false,
      backgroundColor: 'rgb(51, 255, 57)',
      borderColor: 'rgba(51, 255, 57, 0.2)',
      yAxisID: 'y-axis-3',
    }
    ]
  }

  const options = {
    scales: {
    },
  };
  return(
    <>
    <div className='header'>
      <div className='links'>
      </div>
    </div>
    <Line data={dataDisplay} options={options} />
  </>
  )

}
