import React, { Component } from 'react';
import LocationList from './components/LocationList';
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

  handleSelectedLocation = city => {
    //this.props.setSelectedCity(city);
    console.log("handleSelectedLocation")
  }
  
  render() {
    return (
    <div className="App">
       <LocationList cities = { cities } 
       onSelectedLocation = {this.handleSelectedLocation}/>
		</div>
    );
  }
}

export default App;
