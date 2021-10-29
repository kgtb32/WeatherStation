import React from 'react';
import { Line } from 'react-chartjs-2';


export default function ChartData({data, fullDate, color}) {
  
  const dateFormat = fullDate ? data.data.map(e => e[0]) : data.data.map(e => e[0].split(",")[1])
  const displayData = {
    labels: dateFormat,
    datasets: [
      {
        label: data.label,
        data: data.data.map(e => e[1]),
        fill: false,
        backgroundColor: color,
        borderColor: color,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return(
    <>
    <div className='header'>
      <div className='links'>
      </div>
    </div>
    <Line data={displayData} options={options} style={{width: "100%"}} />
  </>
  )

}
