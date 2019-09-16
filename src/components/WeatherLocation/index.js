import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SNOW, CLOUDY } from './../../constants/weather';

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

    getWeatherState = (weather) => {
        return CLOUDY;
    }

    getData = ( weather_data ) => {
        const { humidity , temp} = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data = {
            humidity, // sólo con humidity igual prop simple
            temperature : temp,
            weatherState: weatherState, 
            wind: `${speed} m/s`
        }

        return data;
    }

    handleUpdateClick = () => { 
        fetch(api_weather).then( data => {
            console.log("data", data )
            return data.json();
        }).then( weather_data => {
            const data = this.getData(weather_data);
            
            this.setState({ 
                data : data,
                city: 'Barcelona'
            });

            console.log("weather_data", weather_data )
        });
        
    }

    render = () => {
        const { city, data } = this.state;
        return (
            <div>
                <Location city = { city  } /> 
                <WeatherData data = { data } />
                <button onClick={ this.handleUpdateClick }>Actualiza</button>
            </div> )
        }
    };

export default WeatherLocation;