import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types/types";
import {AxiosResponse} from "axios";

type CurrentWeather = {
    weather: Weather,
    loading: boolean,
    response: Response,
}

type Response = {
    status: number,
    message: string,
}

const initialState: CurrentWeather = {
    weather: {
        current: {
            temp_c: 4,
            wind_kph: 10,
            feelslike_c: 2,
            condition: {
                icon: '//cdn.weatherapi.com/weather/64x64/night/326.png'
            }
        },
        location: {
            country: "Russia",
            lat: 55.75,
            localtime: "2022-11-13 3:56",
            localtime_epoch:1668301016,
            lon: 37.62,
            name: "Moscow",
            region: "Moscow City",
            tz_id: "Europe/Moscow",
        },
        forecast: {
            forecastday: [{
                date: '',
                date_epoch: 0,
                day: {
                    air_quality: {
                        co: 0,
                        no2: 0,
                        so2: 0,
                    }
                },
                astro: {},
                hour: [{
                    temp_c: 0,
                    air_quality: {
                        co: 0,
                        no2: 0,
                        so2: 0,
                    }
                }]
            }]
        }
    },
    loading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.loading = true
        },
        fetchCurrentWeatherSuccess(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ){
            state.weather = action.payload.data
            state.loading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ){
            state.loading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export default currentWeatherSlice.reducer