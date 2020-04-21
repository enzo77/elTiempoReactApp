import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getForecastDataFromCities} from './../reducers';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtentedContainer extends Component {
    render() {
        const { city , forecastData } = this.props;
        return (
            city && 
                <ForecastExtended city = {city} forecastData={forecastData}/>
        );
    }
}

ForecastExtentedContainer.propTypes = {
    city : PropTypes.string.isRequired
};

const mapStateToProps = state => ({city, cities}) => ({
    city : state.city, 
    forecastData:  getForecastDataFromCities(state)
});

export default connect(mapStateToProps, null)(ForecastExtentedContainer);
