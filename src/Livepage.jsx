import ReactDOM from 'react-dom/client';
import React , {useEffect, useState} from 'react';
import './Live.css';
import Graph from './Graph';

function Livepage(){

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


    return(
    <div className='container'>
     
        <h1> 🔴 Live Covid Tracker</h1>
        <div className='heading'>
        <button  onClick = {
            () => {
                function callback2(data) {
                    window.location = "/Graph"
                }
            }
        }
> View Graph</button>
      </div>
   
       <div className='row1'>
            <div className='card1'>
            <div className='card_field'>
                <h3>Country: </h3>
                <h3>India</h3>
            </div>
             </div>


        <div className='card2'>
            <div className='card_field'>
                <h3>Recovered : </h3>
                <h3>{data.recovered}</h3>
            </div>
        </div>

        <div className='card3'>
            <div className='card_field'>
                <h3>Deaths : </h3>
                <h3>{data.deaths}</h3>
            </div>
        </div>
    </div>


    <div className='row2'>
            <div className='card4'>
            <div className='card_field'>

                <h3>Active Cases : </h3>
                <h3>{data.active}</h3>
            </div>
             </div>


        <div className='card5'>
            <div className='card_field'>
                <h3>Total Cases : </h3>
                <h3>{data.confirmed}</h3>
            </div>
        </div>

        <div className='card6'>
            <div className='card_field'>
                <h3>Last Update : </h3>
                <h3>{data.lastupdatedtime}</h3>
            </div>
        </div>
    </div>

      

       </div>
    );
}

export default Livepage;