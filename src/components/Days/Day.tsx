import React from 'react';
import cl from './Day.module.scss'
import DateConverter from "../../model/DateConverter";
import {IForecastday} from "../../store/types/types";

interface Props {
    day: IForecastday
}

const Day = ({day}: Props) => {

    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.day}>
                    {DateConverter(day.date)}
                </div>
                <hr className={cl.hr} />
                <div className={cl.icon}>
                    <img src={day.day.condition?.icon} alt=""/>
                </div>
                <div className={cl.degree}>
                    {day.day.avgtemp_c && Math.ceil(day.day.avgtemp_c)}°
                </div>
            </div>
        </div>
    );
};

export default Day;