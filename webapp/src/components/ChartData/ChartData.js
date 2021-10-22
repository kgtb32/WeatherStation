import React from 'react'
import { Chart } from 'react-charts'
 
export default function ChartData(data) {
  const temperature = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      }
    ],
    []
  )
  const pressure = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 2], [3, 2], [4, 2]]
      }
    ],
    []
  )
  const humidity = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 12], [1, 2], [2, 20], [3, 2], [4, 7]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <>
    <div className="graph_container">
      <Chart data={temperature} axes={axes} />
    </div>
      {/* <Chart data={pressure} axes={axes} />
      <Chart data={humidity} axes={axes} /> */}
    </>
  )
}