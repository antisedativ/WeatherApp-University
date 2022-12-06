import React from 'react';
import cl from './Tomorrow.module.scss'
import {useCustomSelector} from "../../hooks/storeHooks";
import {IHour} from "../../store/types/APItypes";
import HourTomorrow from "../../components/HourTomorrow/HourTomorrow";

const Tomorrow:React.FC = () => {
    const { current, location, forecast } = useCustomSelector(state => state.currentWeatherSliceReducer.weather)
    const hours:IHour[] = []
    for (let i = 0; i < forecast.forecastday[0].hour.length; i+=4) {
        let weather = forecast.forecastday[0].hour[i]
        hours.push(weather)
    }
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.content_top}>
                    <div>Monday</div>
                    <div>10:00</div>
                </div>
                <hr/>
                <div className={cl.content_main}>
                    <div className={cl.temperature}>
                        10°
                    </div>
                    <div className={cl.icon}>
                        <img src='//cdn.weatherapi.com/weather/64x64/night/122.png' alt=""/>
                    </div>
                </div>
                <div className={cl.content_bottom}>
                    <div className={cl.real_feel}>
                        Real Feel 17°
                    </div>
                    <div className={cl.wind}>
                        Wind: S-E, 15 km/h
                    </div>
                    <div className={cl.footer}>
                        <div className={cl.pressure}>
                            Pressure: 1100MB
                        </div>
                        <div className={cl.humidity}>
                            Humidity: 30%
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.hours}>
                {hours.map(hour => <HourTomorrow key={hour.time_epoch} hour={hour}/>)}
            </div>
        </div>
    );
};

export default Tomorrow;