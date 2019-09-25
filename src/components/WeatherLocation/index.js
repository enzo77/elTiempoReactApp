import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../service/transformWeather';
import Spinner from './../../utility/spinner';
 
const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "9baf99c72740d9bfafc2a4909e5b7a9b";

class WeatherLocation extends Component { 

    constructor({ city }) { 
        super();
        this.state = { 
            data : null,
            city
        }
    } 
    
    componentWillMount() {
        const  { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;

        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            
            this.setState({ 
                data : data,
                city
            });
        });
    }
    
    componentDidMount() {}
    componentWillUpdate(nextProps, nextState) {}
    componentDidUpdate(){}

    render = () => {
        const { city, data } = this.state;
        return (
            <div>
                <Location city = { city  } /> 
                {data ? <WeatherData data = { data } /> : <Spinner /> }
            </div> )
        }
    }

    WeatherLocation.propTypes = {
        city: PropTypes.string
    };

export default WeatherLocation;