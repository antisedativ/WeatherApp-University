import React from 'react';
import cl from './Today.module.scss'
// @ts-ignore
import icon from '../../assets/images/weather/20.png'
import {Weather} from "../../store/types/types";

interface Props {
    weather: Weather;
}

const Today = ({weather}:Props) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.content_top}>
                    <div>Sunday</div>
                    <div>11:42 PM</div>
                </div>
                <hr />
                <div className={cl.content_main}>
                    <div className={cl.temperature}>
                        {weather.current.temp_c}°
                    </div>
                    <div className={cl.icon}>
                        <img src={weather.current.condition?.icon} alt=""/>
                    </div>
                </div>
                <div className={cl.content_bottom}>
                    <div className={cl.real_feel}>
                        Real Feel {weather.current.feelslike_c}°
                    </div>
                    <div className={cl.wind}>
                        Wind: {weather.current.wind_dir}, {weather.current.wind_kph} km/h
                    </div>
                    <div className={cl.footer}>
                        <div className={cl.pressure}>
                            Pressure: {weather.current.pressure_mb}MB
                        </div>
                        <div className={cl.humidity}>
                            Humidity: {weather.current.humidity}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Today;