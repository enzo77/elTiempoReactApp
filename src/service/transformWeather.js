import { CLOUDY } from './../constants/weather';
import convert from 'convert-units';

const getTemp = Kelvin => {
    return convert(Kelvin).from('K').to('C').toFixed(2);
}

const getWeatherState = () => {
    return CLOUDY;
}

const transformWeather =  weather_data  => {
    const { humidity , temp} = weather_data.main;
    const { speed } = weather_data.wind;

    const weatherState = getWeatherState();
    const temperature = getTemp(temp);

    const data = {
        humidity, // sólo con humidity igual prop simple
        temperature,
        weatherState, 
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;