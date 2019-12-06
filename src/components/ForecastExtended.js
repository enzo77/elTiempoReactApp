import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

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

class ForecastExtended extends Component {

    renderForecastItemDays(){
        return days.map( day => (<ForecastItem weekDay={ day } data={data} /> ));
    }

    render(){
        const  {city} = this.props;
        return(
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        )
    }
    
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;