import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';

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

    constructor() {
        super();
        this.state = {city: null};
    }

    render() {
        const { city } = this.state;

        return (
            <Grid>
                <Row>Titulo </Row> 
                <Row>
                    <Col xs = { 12 }md = { 6 } >
                        <LocationListContainer cities = { cities } /> 
                    </Col>

                    <Col xs = { 12 } md = { 6 }>
                        <div className = 'detail'>
                            {  city && <ForecastExtended city = { city } />  } 
                        </div> 
                    </Col>
                </Row>
            </Grid>
        );
    }
}


export default App;