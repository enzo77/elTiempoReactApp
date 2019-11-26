import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'

class ForecastExtended extends Component {

    render(){
        const  {city} = this.props;
        return(
            <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        )
    }
    
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;