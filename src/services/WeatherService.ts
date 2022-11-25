import axios, {AxiosResponse} from 'axios'
import {Weather} from "../store/types/types";

export class WeatherService {
    static  getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1990e265267b4bbdb12203319222511&q=${city}&days=6&aqi=yes&alerts=no`)
    }
}
// https://api.weatherapi.com/v1/current.json?key=64230be717a44ebb80f234832221111&q=${city}&aqi=no