import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities , onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };
    
    const strToComponent = cities => ( 
        cities.map( city => (
            <WeatherLocation 
                city = {city}
                key = {city}
                onWeatherLocationClick = { () => handleWeatherLocationClick(city) } //envio la propieda onWeatherLocationClick al modulo con la funcion
                />
        ))  
    );

    return (
        <div className="locationList">
            { strToComponent( cities ) } 
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;