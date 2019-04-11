import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './/WeatherExtraInfo';
import { SNOW } from './../constants/weather';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature = {20} weatherState  = {SNOW} ></WeatherTemperature>
        <WeatherExtraInfo humidity = {80} wind = {'10m/s'} ></WeatherExtraInfo>
    </div>
)

export default WeatherData;