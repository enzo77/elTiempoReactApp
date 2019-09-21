import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../service/transformWeather';

const location = "Barcellona";
const api_key = "9baf99c72740d9bfafc2a4909e5b7a9b";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component { 

    constructor() { 
        super();
        this.state = { 
            data : null,
            city: 'Maranello'
        }
    } 

    handleUpdateClick = () => { 
        fetch(api_weather).then( data => {
            console.log("data", data )
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            
            this.setState({ 
                data : data,
                city: 'Barcelona'
            });

            console.log("weather_data", weather_data )
        });
        
    }

    
    componentWillMount() {
        this.handleUpdateClick();
    }
    
    componentDidMount() {}
    
    componentWillUpdate(nextProps, nextState) {}
    
    componentDidUpdate(){}

    render = () => {
        const { city, data } = this.state;
        return (
            <div>
                <Location city = { city  } /> 
                {data ? <WeatherData data = { data } /> : 'Cagando...'}
            </div> )
        }
    };

export default WeatherLocation;