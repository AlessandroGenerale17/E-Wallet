import { DefaultTheme, ThemeProvider } from '@react-navigation/native';

const LightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)'
    },
    dark: false
};

const DarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(0, 45, 85)'
    },
    dark: true
};

const themes = [LightTheme, DarkTheme];

export default (theme: 0 | 1) => themes[theme];
