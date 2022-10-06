import React from 'react';
import cl from './Day.module.scss'

interface Props {

}

const Day = (props: Props) => {
    return (
        <div className={cl.day__card}>
            <div className={cl.day__content}>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Day;