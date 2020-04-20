export const SET_CITY = 'SET_CITY';

const setCity = payload =>({ 
    type: SET_CITY ,
    payload 
});

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "9baf99c72740d9bfafc2a4909e5b7a9b";

export const setSelectedCity = payload =>{ 
   return dispatch => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
    dispatch(setCity(payload));

    fetch(url_forecast).then(
        data => (data.json())
    ).then(
        weather_data => {
            const forecastData = transformForecast(weather_data);
            this.setState({ forecastData });
    
        }
    );
    
    return;
   };
};