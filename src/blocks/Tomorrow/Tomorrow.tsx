import React from 'react';
import cl from '../Today/Today.module.scss';
import {useCustomSelector} from "../../hooks/storeHooks";
import {IHour} from "../../store/types/APItypes";
import Hour from "../../components/Hour/Hour";
import Bar from "../../components/Widgets/Charts/Bar";
import DateConverter from "../../model/DateConverter";

const Tomorrow:React.FC = () => {
    const forecast = useCustomSelector(state => state.currentWeatherSliceReducer.weather.forecast)

    const weather = forecast.forecastday[1]
    const [date, time] = DateConverter(weather.date)

    const tempBar = []
    const windBar = []
    const hours:IHour[] = []
    for (let i = 0; i < weather.hour.length; i+=4) {
        hours.push(weather.hour[i])

        tempBar.push(
            {
                ranking: DateConverter(weather.hour[i].time || '')[1],
                value: Math.ceil(weather.hour[i].temp_c)
            },
        )
        windBar.push(
            {
                ranking: DateConverter(weather.hour[i].time || '')[1],
                value: Math.ceil(weather.hour[i].wind_kph || 0)
            },
        )
    }

    return (
        <div className={cl.wrapper}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div className={cl.today}>
                    <div className={cl.content}>
                        <div>
                            <div className={cl.content_top}>
                                <div>{date}</div>
                                <div className={cl.time}>{time}</div>
                            </div>
                            <div className={cl.content_main}>
                                <div className={cl.temperature}>
                                    {Math.ceil(weather.day.avgtemp_c)}°
                                </div>
                                <div className={cl.icon}>
                                    <img src={weather.day.condition.icon} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={cl.content_bottom}>
                            <div className={cl.real_feel}>
                                Chance of rain: {weather.day.daily_chance_of_rain}%
                            </div>
                            <div className={cl.real_feel}>
                                Description: {weather.day.condition.text}
                            </div>
                            <div className={cl.wind}>
                                Wind: {Math.ceil(weather.day.maxwind_kph)} km/h
                            </div>
                            <div className={cl.footer}>
                                <div className={cl.moon_phase}>
                                    Moon phase: {weather.astro.moon_phase}
                                </div>
                                <div className={cl.humidity}>
                                    Humidity: {weather.day.avghumidity}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.hours}>
                    {hours.map(hour => <Hour key={hour.time_epoch} hour={hour}/>)}
                </div>
            </div>
            <div className={cl.charts}>
                <Bar data={tempBar} title={'Temperature C°'} color={'#DA70D6'}/>
                <Bar data={windBar} title={'Wind kph'} color={'#9932CC'}/>
            </div>
        </div>
    );
};

export default Tomorrow;
