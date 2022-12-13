import React from 'react';
import cl from './Today.module.scss';
import {useCustomSelector} from "../../hooks/storeHooks";
import DateConverter from "../../model/DateConverter";
import {IHour} from '../../store/types/APItypes';
import Hour from "../../components/Hour/Hour";
import Bar from "../../components/Widgets/Charts/Bar";

const Today:React.FC = () => {
    const { current, location, forecast } = useCustomSelector(state => state.currentWeatherSliceReducer.weather)

    const [date, time] = DateConverter(location.localtime)

    const tempBar = []
    const windBar = []
    const hours:IHour[] = []
    for (let i = 0; i < forecast.forecastday[0].hour.length; i+=4) {
        let weather = forecast.forecastday[0].hour[i]
        hours.push(weather)
        console.log((weather))

        tempBar.push(
            {
                ranking: DateConverter(weather.time || '')[1],
                value: Math.ceil(weather.temp_c)
            },
        )

        windBar.push(
            {
                ranking: DateConverter(weather.time || '')[1],
                value: Math.ceil(weather.wind_kph || 0)
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
                                    {Math.ceil(current.temp_c)}°
                                </div>
                                <div className={cl.icon}>
                                    <img src={current.condition.icon} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={cl.content_bottom}>
                            <div className={cl.real_feel}>
                                Real Feel {Math.ceil(current.feelslike_c)}°
                            </div>
                            <div className={cl.real_feel}>
                                Cloudiness {current.cloud}%
                            </div>
                            <div className={cl.wind}>
                                Wind: {current.wind_dir}, {Math.ceil(current.wind_kph)} km/h
                            </div>
                            <div className={cl.footer}>
                                <div className={cl.pressure}>
                                    Pressure: {current.pressure_mb}MB
                                </div>
                                <div className={cl.humidity}>
                                    Humidity: {current.humidity}%
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

export default Today;