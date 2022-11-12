import React, {useEffect} from 'react';
import cl from './Info.module.scss'
import InfoSwitcher from "../../components/InfoSwitcher/InfoSwitcher";
import Day from "../../components/Days/Day";
import Today from "../../components/Today/Today";

// @ts-ignore
import ico1 from '../../assets/images/weather/16.png'
// @ts-ignore
import ico2 from '../../assets/images/weather/10.png'
// @ts-ignore
import ico3 from '../../assets/images/weather/22.png'
// @ts-ignore
import ico4 from '../../assets/images/weather/26.png'
import {useCustomDispatch, useCustomSelector} from "../../hooks/storeHooks";
import {fetchWeather} from "../../store/thunks/fetchWeather";

export type Data = {
    day: string,
    icon: any,
    degree: string
}

const Info = () => {

    const data:Data[] = [
        {
            day: 'Mon',
            icon: ico1,
            degree: '16°'
        },
        {
            day: 'Tue',
            icon: ico2,
            degree: '20°'
        },
        {
            day: 'Wed',
            icon: ico3,
            degree: '17°'
        },
        {
            day: 'Thu',
            icon: ico4,
            degree: '10°'
        },
    ]
    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)

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
                {data.map((data:Data) => (<Day props={data}/>))}
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