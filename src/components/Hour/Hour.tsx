import React from 'react';
import {IHour} from "../../store/types/APItypes";
import cl from "../Day/Day.module.scss";
import DateConverter from "../../model/DateConverter";

interface Props {
    hour: IHour
}

const Hour:React.FC<Props> = ({hour}) => {
    const time = DateConverter(hour.time || '')[1]
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.day}>
                    {time}
                </div>
                <hr className={cl.hr} />
                <div className={cl.icon}>
                    <img src={hour.condition?.icon} alt=""/>
                </div>
                <div className={cl.degree}>
                    {Math.ceil(hour.dewpoint_c)}°
                </div>
            </div>
        </div>
    );
};

export default Hour;