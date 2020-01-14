import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../service/transformForecast';
import './styles.css';

/*
    const days =[
        'lunes',
        'martes',
        'Miercoles',
        'Jueves',
        'Viernes'
    ];

    const data = {
        temperature: 10,
        humidity: 10,
        weatherState: 'normal',
        wind: 'normal',
    } 
*/

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "9baf99c72740d9bfafc2a4909e5b7a9b";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData : null
        };
    }

    componentDidMount(){
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData  });
            }
        );
    }

    renderForecastItemDays(forecastData){
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data} /> 
        ));
    }

    renderProgress(){
        return <h3>Cargando Prognostico</h3>;
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        
        return(
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                { forecastData ? 
                this.renderForecastItemDays(forecastData) : 
                this.renderProgress() }
            </div>
        );
    }
    
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

export default ForecastExtended;