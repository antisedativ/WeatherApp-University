import React from 'react';
import cl from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import InfoSwitcher from "../InfoSwitcher/InfoSwitcher";

const Navbar:React.FC = () => {
    const setActive = ({isActive}:any) => (isActive ? [cl.list_item, cl.active].join(" ") : cl.list_item);

    return (
        <div className={cl.wrapper}>
            <div className={cl.tabs}>
                <ul className={cl.list}>
                    <NavLink to='/today' className={setActive}>Today</NavLink>
                    <NavLink to='/tomorrow' className={setActive}>Tomorrow</NavLink>
                    <NavLink to='/next_days' className={setActive}>Next 5 days</NavLink>
                </ul>
                <div className={cl.switcher}>
                    <InfoSwitcher/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;