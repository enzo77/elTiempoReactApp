import React from 'react';

const WeatherExtraInfo = ( { humidity,wind }) => (
    <div> 
        <span>{`${humidity} % - `}</span>
        <span>{`${humidity}  wind`}</span>
    </div>
)

export default WeatherExtraInfo;

