import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtentedContainer extends Component {
    render() {
        return (
            this.props.city && 
                <ForecastExtended city = {this.props.city}/>
        );
    }
}

ForecastExtentedContainer.propTypes = {
    city : PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    city: state.city
});

export default connect(mapStateToProps, null)(ForecastExtentedContainer);
