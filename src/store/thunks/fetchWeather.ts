import {AppDispatch} from "../store";
import {WeatherService} from "../../services/WeatherService";
import {currentWeatherSlice} from "../slices/currentWeatherSlice";

// thunks

export const fetchWeather =
    (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather);
        const res = await WeatherService.getCurrentWeather(payload);
        //console.log(res)
        if(res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
        }
    } catch (e) {
        console.log(e)
    }
}