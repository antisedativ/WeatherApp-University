import {ReactNode, useState} from "react";
import {ThemeContext} from "./ThemeContext";
import {ChangeCSSRoot} from "../model/ChangeCSSRoot";
import {storage} from "../model/Storage";

interface Props {
    children: ReactNode;
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const ThemeProvider = ({children, ...props}:Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem(Theme.DARK))
    ChangeCSSRoot(theme)

    function changeTheme(theme: Theme) {
        storage.setItem('theme', theme)
        setTheme(theme)
        ChangeCSSRoot(theme)
    }

    return <ThemeContext.Provider {...props} value={{
        theme,
        changeTheme,
    }}
    >{children}</ThemeContext.Provider>
}