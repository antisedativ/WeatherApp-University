import React, {useState} from 'react';
import cl from './Header.module.scss'
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeProvider";
import {useCustomDispatch, useCustomSelector} from "../../hooks/storeHooks";
import {fetchWeather} from "../../store/thunks/fetchWeather";
import SearchInput from "../../components/SearchInput/SearchInput";

const Header:React.FC = () => {
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

    async function getWeather() {
        await dispatch(fetchWeather(city))
        setCity('')
    }

    return (
        <>
            <div className={cl.wrapper}>
                <div className={cl.content}>
                    <div className={cl.icons_wrapper}>
                        <div className={cl.icon}>
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
                        <div className={cl.icon}>
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
                    <div className={cl.city}>
                        <span>
                            {location.name}, {location.country.length <= 10 ? location.country : validLocation(location.country)}
                        </span>
                    </div>
                    <div className={cl.search}>
                        <SearchInput />
                    </div>
                    <div className={cl.switch_theme} onClick={()=>changeTheme()}>
                        <ThemeSwitcher />
                    </div>
                    <div className={cl.avatar}>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;