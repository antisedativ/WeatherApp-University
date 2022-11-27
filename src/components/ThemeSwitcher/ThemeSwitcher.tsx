import React from 'react';
import cl from './ThemeSwither.module.scss'

const ThemeSwitcher:React.FC = () => {
    return (
        <div>
            <input type="checkbox" className={cl.switch} id="switch"/>
        </div>
    );
};

export default ThemeSwitcher;