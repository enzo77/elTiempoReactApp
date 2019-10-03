import React from 'react'; 
import WeatherLocation from './WeatherLocation';


const getWeatherLocationCity = (cities) => ( 
    cities.map((city , i) => {
        console.log("city" , city)
        console.log("indice" , i)
        return (<WeatherLocation city = { city } key = {i} />);
    })  
)

const LocationList = ({ city }) => (
    <div>
        { getWeatherLocationCity( city ) } 
    </div>
)

export default LocationList;