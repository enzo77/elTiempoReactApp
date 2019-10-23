//Setup
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../service/transformWeather';
//Assets
import Spinner from './../../utility/spinner';
import './styles.css';

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "9baf99c72740d9bfafc2a4909e5b7a9b";

class WeatherLocation extends Component { 
  
    constructor({ city, onWeatherLocationClick }) { 
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
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
       
        return ( 
            <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
                <Location city = { city } /> 
                {data ? <WeatherData data = { data } /> : <Spinner /> }
            </div> 
            )
        }
    }

    WeatherLocation.propTypes = {
        city: PropTypes.string,
        onWeatherLocationClick: PropTypes.func,
    };

export default WeatherLocation;