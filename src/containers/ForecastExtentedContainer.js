import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtentedContainer extends Component {
    render() {
        return (
            <div>
                <ForecastExtended city = {this.props.city}/>
            </div>
        );
    }
}

ForecastExtentedContainer.propTypes = {
    city : PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    city: state.city
});

export default connect(mapStateToProps, null)(ForecastExtentedContainer);
