import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import WeatherLocation from './components/WeatherLocation';
import './App.css';


class App extends Component {
  
  render() {
    const theme = {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    };
    return (
    <div className="App">
        <ThemeProvider theme={theme}>
     	  <WeatherLocation />
     	 </ThemeProvider>
		</div>
    );
  }
}

export default App;
