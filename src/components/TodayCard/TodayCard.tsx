import React from 'react';
import cl from './TodayCard.module.scss'
import DateConverter from "../../model/DateConverter";
import {Weather} from "../../store/types/APItypes";

interface Props {
    weather: Weather;
}

const TodayCard:React.FC<Props> = ({weather}) => {
    const time = weather.location.localtime.split(' ')[1]

    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.content_top}>
                    <div>{DateConverter(weather.location.localtime)}</div>
                    <div>{time}</div>
                </div>
                <hr/>
                <div className={cl.content_main}>
                    <div className={cl.temperature}>
                        {Math.ceil(weather.current.temp_c)}°
                    </div>
                    <div className={cl.icon}>
                        <img src={weather.current.condition?.icon} alt=""/>
                    </div>
                </div>
                <div className={cl.content_bottom}>
                    <div className={cl.real_feel}>
                        Real Feel {Math.ceil(weather.current.feelslike_c)}°
                    </div>
                    <div className={cl.wind}>
                        Wind: {weather.current.wind_dir}, {Math.ceil(weather.current.wind_kph)} km/h
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

export default TodayCard;