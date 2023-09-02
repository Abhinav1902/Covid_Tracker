import ReactDOM from 'react-dom/client';
import React , {useEffect, useState} from 'react';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

import { VictoryPie } from "victory-pie";
import './Graph.css'


  const Graph = () => {
    const [data,setData] = useState([]);

    const getCoviddata =async()=>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json'); 
            const actualdata = await res.json();
            setData(actualdata.statewise[0])
        }
        catch(err){
          console.log("Error")
        }
       
    }
    useEffect(()=>{
     getCoviddata()
    },[]);

const myData = [
    { x: "Active Cases", y: data.active },
    { x: "Deaths", y: data.deaths },
    { x: "Confirmed", y: data.confirmed },
    { x: "Recovered", y: data.recovered },
   
  ];
  
    return (
      <div className='pie'>
      <div className='col1'>
        <VictoryPie
          data={myData}
          colorScale={["blue", "yellow", "red","violet"]}
          radius={70}
        />
        </div>
        <div className='col2'>
        <Bar
          data={{
            labels: ["Active Cases", "Deaths", "Confirmed", "Recovered"],
            datasets: [
              {
                label: "total count/value",
                data: [211552,1441319, 2122613, 3311400],
                backgroundColor: ["aqua", "green", "red", "yellow"],
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        </div>
      </div>
    )
}
export default Graph;