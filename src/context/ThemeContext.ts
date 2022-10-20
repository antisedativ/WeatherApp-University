import {createContext} from "react";
import {Theme} from "./ThemeProvider";

interface Props {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<Props>({
    theme: Theme.DARK,
    changeTheme: () => {}
})