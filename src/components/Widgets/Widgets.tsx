import React from 'react';
import cl from './Widgets.module.scss'
import {useCustomSelector} from "../../hooks/storeHooks";
import DateConverter from "../../model/DateConverter";
import RadialBar from "./Charts/RadialBar";
import Bump from "./Charts/Bump";
import Pie from "./Charts/Pie";

const Widgets:React.FC = () => {
    const forecast = useCustomSelector(state => state.currentWeatherSliceReducer.weather.forecast)
    const weather = forecast.forecastday

    const BumpData = []
    const RadialBarData = []
    const PieData = []
    for (let i = 1; i < weather.length; i++) {
        BumpData.push(
            {
                "id": DateConverter(weather[i].date)[0],
                "data": [
                    {
                        "x": '03:00',
                        "y": Math.ceil(weather[i].hour[3].temp_c)
                    },
                    {
                        "x": '09:00',
                        "y": Math.ceil(weather[i].hour[9].temp_c)
                    },
                    {
                        "x": '15:00',
                        "y": Math.ceil(weather[i].hour[15].temp_c)
                    },
                    {
                        "x": '21:00',
                        "y": Math.ceil(weather[i].hour[21].temp_c)
                    },
                ]
            },
        )
        PieData.push(
            {
                "id": DateConverter(weather[i].date)[0],
                "label": DateConverter(weather[i].date),
                "value": weather[i].day.uv,
                "color": `hsl(${56+i*10}, 70%, 50%)`
            }
        )
    }
    for (let i = 0; i < weather.length-2; i++) {
        RadialBarData.push(
            {
                "id": DateConverter(weather[i].date)[0],
                "data": [
                    {
                        "x": "CO",
                        "y": Math.ceil(weather[i].day.avgtemp_c)
                    },
                    {
                        "x": "NO2",
                        "y": Math.ceil(weather[i].day.avgtemp_c)
                    },
                    {
                        "x": "SO2",
                        "y": Math.ceil(weather[i].day.avgtemp_c)
                    }
                ]
            }
        )
    }
    return (
        <div className={cl.wrapper}>
            <RadialBar data={RadialBarData} />
            <Bump data={BumpData} />
            <Pie data={PieData} />
        </div>
    );
};

export default Widgets;