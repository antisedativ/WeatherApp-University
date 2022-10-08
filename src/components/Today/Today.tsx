import React from 'react';
import cl from './Today.module.scss'
// @ts-ignore
import icon from '../../assets/images/weather/20.png'


const Today = () => {
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
                        16°
                    </div>
                    <div className={cl.icon}>
                        <img src={icon} alt=""/>
                    </div>
                </div>
                <div className={cl.content_bottom}>
                    <div className={cl.real_feel}>
                        Real Feel 18°
                    </div>
                    <div className={cl.wind}>
                        Wind: N-E, 3-4 km/h
                    </div>
                    <div className={cl.footer}>
                        <div className={cl.pressure}>
                            Pressure: 1000MB
                        </div>
                        <div className={cl.humidity}>
                            Humidity: 51%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Today;