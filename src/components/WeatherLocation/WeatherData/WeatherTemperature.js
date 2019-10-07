import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,THUNDER,DRIZZLE } from './../../../constants/weather';
import PropTypes from 'prop-types';

const stateToIconName = (weatherState) => { 
    switch(weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
            return "day-sunny";
    }
}

const getWeatherIcon = (weatherState) => { 
    return ( <WeatherIcons className='wicon' name={ stateToIconName(weatherState) } size="2x" /> )
}

const WeatherTemperature = ({ temperature , weatherState }) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>C°</span>
    </div>
)

WeatherTemperature.propTypes = {
    weatherState: PropTypes.string,
    temperature: PropTypes.number.isRequired
};

export default WeatherTemperature;