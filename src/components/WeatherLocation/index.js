import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SNOW } from './../../constants/weather';

const data = { 
    temperature: 20,
    weatherState: SNOW,
    humidity: 10 ,
    wind: '10 m/s',
 }

const WeatherLocation = () => (
    <div>
        <Location city = { 'Kuki'  } /> 
        <WeatherData data = { data  } />
    </div>
)

export default WeatherLocation;