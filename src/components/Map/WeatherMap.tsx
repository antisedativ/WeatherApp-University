import React from 'react';
import cl from './WeatherMap.module.scss'
import {YMaps, Map, FullscreenControl, GeolocationControl, ZoomControl} from "react-yandex-maps";
import {useCustomSelector} from "../../hooks/storeHooks";

const WeatherMap = () => {

    const {location} = useCustomSelector(state => state.currentWeatherSliceReducer.weather)
    return (
        <>
            <YMaps>
                <div className={cl.wrapper}>
                    <Map defaultState={{center: [location.lat, location.lon], zoom: 11}}
                         className={cl.map}
                    >
                        <FullscreenControl options={{float: 'left'}} />
                        <GeolocationControl options={{float: 'right'}}/>
                        <ZoomControl options={{float: 'left'}}/>
                    </Map>
                </div>

            </YMaps>
        </>
    );
};

export default WeatherMap;