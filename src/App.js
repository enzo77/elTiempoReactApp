import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities =  [
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

        this.state = { 
            city : "Maranello",
        }
    }

    handleSelectedLocation = city => {
      //this.props.setSelectedCity(city);
      console.log("handleSelectedLocation")
    }
  
    render() {
        const { city } = this.state;

        return (
            <Grid>
                <Row>
                Titulo
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities = { cities } 
                        onSelectedLocation = {this.handleSelectedLocation}/>
                    </Col>

                    <Col xs={12} md={6}>
                         <div className='detail'>
                            <ForecastExtended city={city}/>
                         </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
    
}

export default App;