import React from 'react';
import cl from './Info.module.scss'
import InfoSwitcher from "../../components/InfoSwitcher/InfoSwitcher";
import Day from "../../components/Days/Day";
import Today from "../../components/Today/Today";

import {useCustomSelector} from "../../hooks/storeHooks";

const Info = () => {
    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)
    const forecast = weather.forecast.forecastday

    let newArr = []
    for (let i = 1; i < forecast.length; i++)
        newArr.push(forecast[i])

    return (
        <div className={cl.wrapper}>
            <div className={cl.tabs}>
                <ul className={cl.list}>
                    <li className={cl.list_item}>Today</li>
                    <li className={cl.list_item}>Tomorrow</li>
                    <li className={[cl.list_item, cl.active].join(" ")}>Next 5 days</li>
                </ul>
                <div className={cl.switcher}>
                    <InfoSwitcher/>
                </div>
            </div>
            <div className={cl.days}>
                <Today weather={weather}/>
                {newArr.map((data) => (<Day key={data.date_epoch} day={data}/>))}
            </div>
            <div className={cl.tabs_map} >
                <div>Global map</div>
                <button className={cl.tabs_map_btn}>View wide</button>
            </div>
            <div className={cl.map_wrapper}>
                {}
            </div>
        </div>
    );
};

export default Info;