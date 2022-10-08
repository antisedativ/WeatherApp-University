import React from 'react';
import cl from './Info.module.scss'
import InfoSwitcher from "../../components/InfoSwitcher/InfoSwitcher";
import Day from "../../components/Days/Day";
import Today from "../../components/Today/Today";

// @ts-ignore
import ico1 from '../../assets/images/weather/16.png'
// @ts-ignore
import ico2 from '../../assets/images/weather/10.png'
// @ts-ignore
import ico3 from '../../assets/images/weather/22.png'
// @ts-ignore
import ico4 from '../../assets/images/weather/26.png'

type Data = {
    day: string,
    icon: any,
    degree: string
}

const data:Data[] = [
    {
        day: 'Mon',
        icon: ico1,
        degree: '16°'
    },
    {
        day: 'Tue',
        icon: ico2,
        degree: '20°'
    },
    {
        day: 'Wed',
        icon: ico3,
        degree: '17°'
    },
    {
        day: 'Thu',
        icon: ico4,
        degree: '10°'
    },
]

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
                <Today />
                {data.map((data:Data) => (<Day props={data}/>))}
            </div>
        </div>
    );
};

export default Info;