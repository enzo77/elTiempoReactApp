import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SNOW } from './../../constants/weather';

const location = "Barcelona";
const api_key = "9baf99c72740d9bfafc2a4909e5b7a9b";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = { 
    temperature: 20,
    weatherState: SNOW,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component { 

    constructor() { 
        super();
        this.state = { 
            data : data1,
            city: 'Maranello'
        }
    } 

    getData = ( weather_data ) => {

    }

    handleUpdateClick = () => { 
        fetch(api_weather).then( data => {
            console.log("data", data )
            return data.json();
        }).then( weather_data => {
            const data = this.getData(weather_data);
            this.setState({ data });
            console.log("weather_data", weather_data )
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