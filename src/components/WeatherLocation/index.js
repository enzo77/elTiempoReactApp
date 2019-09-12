import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SNOW , WINDY } from './../../constants/weather';

const data1 = { 
    temperature: 20,
    weatherState: SNOW,
    humidity: 10,
    wind: '10 m/s',
 }

 const data2 = { 
    temperature: 10,
    weatherState: WINDY,
    humidity: 90 ,
    wind: '300 m/s',
 }

class WeatherLocation extends Component { 

    constructor() { 
        super();
        this.state = { 
            data : data1,
            city: 'Maranello'
         }
      } 

    handleUpdateClick = () => { 
        this.setState ({ 
            data : data2,
            city: 'Barcelona'
        });
     }

    render = () => {
        const { city, data } = this.state;
        return (
            <div>
                <Location city = { city  } /> 
                <WeatherData data = { data  } />
                <button onClick={ this.handleUpdateClick }>Actualiza</button>
            </div> )
        }

    };

export default WeatherLocation;