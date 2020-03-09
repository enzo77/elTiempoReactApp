import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = [
    'Barcelona,ES',
    'Madrid,ES',
    'Maranello, IT',
    'London, GB',
    'Oslo, NO',
    'Oymyakon, RU',
    'Salatiga, ID',
    'Markha, RU',
    'New York, US'
];

class App extends Component {

    render() {
        return (
            <Grid>
                <Row>Titulo </Row> 
                <Row>
                    <Col xs = { 12 }md = { 6 } >
                        <LocationListContainer cities = { cities } /> 
                    </Col>

                    <Col xs = { 12 } md = { 6 }>
                        <div className = 'detail'>
                            <ForecastExtendedContainer  /> 
                        </div> 
                    </Col>
                </Row>
            </Grid>
        );
    }
}


export default App;