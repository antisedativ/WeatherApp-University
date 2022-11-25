import React, {useState} from 'react';
import cl from './Header.module.scss'
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeProvider";
import {useCustomDispatch, useCustomSelector} from "../../hooks/storeHooks";
import {fetchWeather} from "../../store/thunks/fetchWeather";

const Header = () => {
    const theme = useTheme()
    const [city, setCity] = useState('')

    const dispatch = useCustomDispatch()
    const {location} = useCustomSelector(state => state.currentWeatherSliceReducer.weather)

    function validLocation(loc:string) {
        const words = loc.split(" ");
        const result = []
        for (let i = 0; i < words.length; i++) {
            result.push(words[i][0].toUpperCase())
        }
        return(result.join(''))
    }

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    return (
        <>
            <div className={cl.header__wrapper}>
                <div className={cl.header__content}>
                    <div className={cl.header__icons_wrapper}>
                        <div className={cl.header__icon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_222_100)" filter="url(#filter0_d_222_100)">
                                    <path d="M11 0H8C5.79086 0 4 1.79086 4 4V7C4 9.20914 5.79086 11 8 11H11C13.2091 11 15 9.20914 15 7V4C15 1.79086 13.2091 0 11 0Z" fill="white"/>
                                    <path d="M24 0H21C18.7909 0 17 1.79086 17 4V7C17 9.20915 18.7909 11 21 11H24C26.2091 11 28 9.20915 28 7V4C28 1.79086 26.2091 0 24 0Z" fill="white"/>
                                    <path d="M11 13H8C5.79086 13 4 14.7909 4 17V20C4 22.2092 5.79086 24 8 24H11C13.2091 24 15 22.2092 15 20V17C15 14.7909 13.2091 13 11 13Z" fill="white"/>
                                    <path d="M24 13H21C18.7909 13 17 14.7909 17 17V20C17 22.2092 18.7909 24 21 24H24C26.2091 24 28 22.2092 28 20V17C28 14.7909 26.2091 13 24 13Z" fill="white"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_222_100" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_100"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_222_100" result="shape"/>
                                    </filter>
                                    <clipPath id="clip0_222_100">
                                        <rect width="24" height="24" fill="white" transform="translate(4)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={cl.header__icon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_222_92)">
                                    <path d="M7.42383 21C7.81149 21.8914 8.45106 22.6502 9.26398 23.1831C10.0769 23.716 11.0278 23.9999 11.9998 23.9999C12.9719 23.9999 13.9228 23.716 14.7357 23.1831C15.5486 22.6502 16.1882 21.8914 16.5758 21H7.42383Z" fill="white"/>
                                    <path d="M22.3923 12.5491L20.6563 6.82605C20.1004 4.8244 18.8917 3.06583 17.2222 1.82955C15.5526 0.593281 13.518 -0.0498305 11.4412 0.00232993C9.36444 0.0544903 7.36462 0.798932 5.75927 2.11746C4.15391 3.43598 3.03504 5.25301 2.5803 7.28005L1.2323 12.8171C1.05313 13.5528 1.04342 14.3196 1.20391 15.0597C1.36439 15.7998 1.69087 16.4937 2.15872 17.0891C2.62656 17.6846 3.22354 18.166 3.90461 18.497C4.58568 18.828 5.33304 19 6.0903 19.0001H17.6073C18.388 19.0001 19.1579 18.8173 19.8553 18.4663C20.5527 18.1153 21.1582 17.6059 21.6233 16.9788C22.0884 16.3517 22.4003 15.6245 22.5338 14.8552C22.6673 14.086 22.6189 13.2962 22.3923 12.5491V12.5491Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_92">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className={cl.header__city}>
                        <span>
                            {location.name}, {location.country.length <= 10 ? location.country : validLocation(location.country)}
                        </span>
                    </div>
                    <div className={cl.header__search}>
                        <div className={cl.header__icon_search} onClick={() => dispatch(fetchWeather(city))}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_222_22)">
                                    <path d="M23.7068 22.2938L17.7378 16.3248C19.3644 14.3354 20.1642 11.7969 19.9716 9.23432C19.7791 6.67179 18.609 4.28129 16.7034 2.55728C14.7977 0.833269 12.3024 -0.0923492 9.73342 -0.0281174C7.16447 0.0361144 4.71849 1.08528 2.9014 2.90237C1.08431 4.71946 0.0351379 7.16545 -0.029094 9.7344C-0.0933258 12.3034 0.832293 14.7987 2.5563 16.7043C4.28031 18.61 6.67081 19.7801 9.23334 19.9726C11.7959 20.1651 14.3344 19.3654 16.3238 17.7388L22.2928 23.7078C22.4814 23.8899 22.734 23.9907 22.9962 23.9884C23.2584 23.9862 23.5092 23.881 23.6946 23.6956C23.88 23.5102 23.9852 23.2594 23.9875 22.9972C23.9897 22.735 23.8889 22.4824 23.7068 22.2938ZM9.99978 18.0008C8.41753 18.0008 6.87081 17.5316 5.55522 16.6525C4.23963 15.7735 3.21425 14.524 2.60875 13.0622C2.00324 11.6004 1.84482 9.99189 2.1535 8.44004C2.46218 6.88819 3.22411 5.46272 4.34293 4.3439C5.46175 3.22508 6.88721 2.46316 8.43906 2.15448C9.99091 1.84579 11.5994 2.00422 13.0613 2.60972C14.5231 3.21522 15.7725 4.2406 16.6515 5.5562C17.5306 6.87179 17.9998 8.41851 17.9998 10.0008C17.9974 12.1218 17.1538 14.1552 15.654 15.655C14.1542 17.1548 12.1208 17.9984 9.99978 18.0008Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_22">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <input type="text" placeholder="Search" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className={cl.header__switch_theme} onClick={()=>changeTheme()}>
                        <ThemeSwitcher />
                    </div>
                    <div className={cl.header__avatar}>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;