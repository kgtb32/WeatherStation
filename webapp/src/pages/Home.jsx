import React from "react";

import TopBar from '../components/TopBar/TopBar'
import ChartData from '../components/ChartData/ChartData'

function Home(){
    return (
        <div className="w-100">
            <TopBar />
            <h1>Weather Station</h1>
            <ChartData />
        </div>
    )
}

export default Home