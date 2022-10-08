import React from 'react';
import cl from './Day.module.scss'

// @ts-ignore
import ico1 from '../../assets/images/weather/16.png'

interface Props {
    props: object
}

const Day = (props: Props) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.day}>
                    Mon
                </div>
                <hr className={cl.hr} />
                <div className={cl.icon}>
                    <img src={ico1} alt=""/>
                </div>
                <div className={cl.degree}>
                    16°
                </div>
            </div>
        </div>
    );
};

export default Day;