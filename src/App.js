import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = ['Barcelona', 'Madrid', 'Londres'];

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
