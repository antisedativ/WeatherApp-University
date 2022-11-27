import React from 'react';
import cl from './InfoSwitcher.module.scss'

const InfoSwitcher:React.FC = () => {
    return (
        <div className={cl.container}>
            <label className={cl.switch}>
                <input type="checkbox" id="toggle_vat" className={cl.toggle_vat}/>
                    <div className={[cl.round, cl.slider].join(' ')}>
                        <span className={cl.slider_text}><span className={cl.off}>Forecast</span><span
                            className="on">Air quality</span></span>
                    </div>
            </label>
        </div>
    );
};

export default InfoSwitcher;