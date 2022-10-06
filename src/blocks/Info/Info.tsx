import React from 'react';
import cl from './Info.module.scss'
import InfoSwitcher from "../../components/InfoSwitcher/InfoSwitcher";
import Day from "../../components/Day/Day";

const Info = () => {
    return (
        <div className={cl.info__wrapper}>
            <div className={cl.info__tabs}>
                <ul className={cl.info__list}>
                    <li className={cl.info__list_item}>Today</li>
                    <li className={cl.info__list_item}>Tomorrow</li>
                    <li className={[cl.info__list_item, cl.active].join(" ")}>Next 5 days</li>
                </ul>
                <div className={cl.info__switcher}>
                    <InfoSwitcher/>
                </div>
            </div>
            <div className={cl.info__days}>
                <Day/>
            </div>
        </div>
    );
};

export default Info;