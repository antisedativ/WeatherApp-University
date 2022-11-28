import React from 'react';
import cl from './Info.module.scss'
import Day from "../Days/Day";
import TodayCard from "../TodayCard/TodayCard";
import {useCustomSelector} from "../../hooks/storeHooks";
import WeatherMap from "../Map/WeatherMap";

const Info:React.FC = () => {
    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)
    const forecast = weather.forecast.forecastday

    let days = []
    for (let i = 1; i < forecast.length; i++)
        days.push(forecast[i])

    return (
        <div className={cl.wrapper}>
            <div className={cl.days}>
                <TodayCard weather={weather}/>
                {days.map((data) => (<Day key={data.date_epoch} day={data}/>))}
            </div>
            <div className={cl.tabs_map} >
                <div>Global map</div>
                <button className={cl.tabs_map_btn}>View wide</button>
            </div>
            <div>
                <WeatherMap />
            </div>
        </div>
    );
};

export default Info;