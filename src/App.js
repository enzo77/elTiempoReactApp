import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const city = ['Barcelona', 'Madrid', 'Londres'];

class App extends Component {
  
  render() {

    return (
    <div className="App">
       <LocationList city = { city } />
		</div>
    );
  }
}

export default App;
