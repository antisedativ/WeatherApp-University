import React from 'react';
import cl from "./HourTomorrow.module.scss";

const HourTomorrow:React.FC<any> = (hour) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.time}>
                    10:00
                </div>
                <hr className={cl.hr} />
                <div className={cl.icon}>
                    <img src='//cdn.weatherapi.com/weather/64x64/night/122.png' alt=""/>
                </div>
                <div className={cl.degree}>
                    17°
                </div>
            </div>
        </div>
    );
};

export default HourTomorrow;