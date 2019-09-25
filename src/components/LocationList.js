import React from 'react'; 
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
       <WeatherLocation city = { 'Barcelona' } />
       <WeatherLocation city = { 'Madrid' } />
       <WeatherLocation city = { 'Londres' } />
    </div>
)

export default LocationList;