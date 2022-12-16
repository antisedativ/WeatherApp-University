import React from 'react';
import cl from './Day.module.scss'
import DateConverter from "../../model/DateConverter";
import {IForecastday} from "../../store/types/APItypes";

interface Props {
    day: IForecastday
}

const Day:React.FC<Props> = ({day}) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.day}>
                    {DateConverter(day.date)[0].substr(0, 3)}
                </div>
                <hr className={cl.hr} />
                <div className={cl.icon}>
                    <img src={day.day.condition.icon} alt="icon"/>
                </div>
                <div className={cl.degree}>
                    {Math.ceil(day.day.avgtemp_c)}°
                </div>
            </div>
        </div>
    );
};

export default Day;