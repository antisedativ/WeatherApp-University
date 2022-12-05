import axios, {AxiosResponse} from 'axios'
import {Weather} from "../store/types/APItypes";

import {weatherKey} from "./keys";

export class WeatherService {
    static  getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${city}&days=6&aqi=yes&alerts=no`)
    }
}