import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {createStore} from 'redux';
import { setCity } from './actions';
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

const store = createStore(()=> {}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

    constructor() {
        super();
        this.state = {city: null};
    }

    handleSelectedLocation = city => {
        this.setState({ city });

        store.dispatch(setCity(city));
    }

    render() {
        const { city } = this.state;

        return (
            <Grid>
                <Row>Titulo </Row> 
                <Row>
                    <Col xs = { 12 }md = { 6 } >
                        <LocationList cities = { cities }
                        onSelectedLocation = { this.handleSelectedLocation } /> 
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