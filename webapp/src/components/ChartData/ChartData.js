import React from 'react';
import { Line } from 'react-chartjs-2';


export default function ChartData(data) {
  
  const displayData = {
      labels: data.data.data.map(e => e[0]),
    // labels: ['5', '4', '3', '4', '5', '6'],
    datasets: [
      {
        label: data.data.label,
        data: data.data.data.map(e => e[1]),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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
