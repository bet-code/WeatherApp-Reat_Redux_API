import axios from 'axios';

const API_KEY = '493025e2689c9bafc99f7f5d2cd909d7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},CA`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}