import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types/APItypes";
import {AxiosResponse} from "axios";
import {initial} from "./initialState";

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
    weather: initial,
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