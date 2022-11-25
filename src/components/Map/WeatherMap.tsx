import { load } from '@2gis/mapgl';
import cl from './WeatherMap.module.scss'
import {useEffect} from "react";
import {useCustomSelector} from "../../hooks/storeHooks";
import Map from "./Map";

export const WeatherMap = () => {
    const {location, current} = useCustomSelector(state => state.currentWeatherSliceReducer.weather)

    useEffect(() => {
        let map: any;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [location.lon, location.lat],
                zoom: 12,
                key: '7cc45466-1dbe-454b-9727-fbba658c5fa3',
                style: 'efac10b3-c66c-40de-8165-decca561250c'
            });

            const marker = new mapglAPI.Marker(map, {
                coordinates: [location.lon, location.lat],
                label: {
                    text: `${current.temp_c}°`,
                    offset: [0, 25],
                    relativeAnchor: [0.5, 0],
                    color: "#fff",
                },
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, [location]);

    return (
        <div className={cl.wrapper}>
            <div className={cl.map}>
                <Map />
            </div>
        </div>
    );
};

export default WeatherMap;