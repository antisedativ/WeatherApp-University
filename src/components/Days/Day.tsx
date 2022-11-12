import React from 'react';
import cl from './Day.module.scss'

// @ts-ignore
import ico1 from '../../assets/images/weather/16.png'
import {Data} from "../../blocks/Info/Info";

interface Props {
    props: Data
}

const Day = (props: Props) => {
    //console.log(props)
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.day}>
                    {props.props.day}
                </div>
                <hr className={cl.hr} />
                <div className={cl.icon}>
                    <img src={props.props.icon} alt=""/>
                </div>
                <div className={cl.degree}>
                    {props.props.degree}
                </div>
            </div>
        </div>
    );
};

export default Day;