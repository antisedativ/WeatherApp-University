import React from 'react';
import cl from './Footer.module.scss'

const Footer:React.FC = () => {
    return (
        <div className={cl.wrapper}>
            <span>2022 ~ Created by Artem</span>
        </div>
    );
};

export default Footer;