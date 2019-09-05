import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY } from './../../../constants/weather';
import PropTypes from 'prop-types';

const stateToIconName = (weatherState) => { 
    switch(weatherState) {
        case CLOUD:
        return "cloud";
        case CLOUDY:
        return "cloudy";
        case SUN:
        return "sun";
        case RAIN:
        return "rain";
        case SNOW:
        return "snow";
        case WINDY:
        return "windy";
        default:
        return "day-sunny";
    }
}

const getWeatherIcon = (weatherState) => { 
    return ( <WeatherIcons name={ stateToIconName(weatherState) } size="2x" /> )
}

const WeatherTemperature = ({ temperature , weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} C `}</span>
    </div>
)

WeatherTemperature.propTypes = {
    weatherState: PropTypes.string,
    temperature: PropTypes.number.isRequired
};

export default WeatherTemperature;