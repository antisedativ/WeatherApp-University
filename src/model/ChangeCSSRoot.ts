import {Theme} from "../context/ThemeProvider";

export const ChangeCSSRoot = (theme: Theme) => {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        'components-background',
        'main-background'
    ]

    components.forEach(component => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
        )
    })
}