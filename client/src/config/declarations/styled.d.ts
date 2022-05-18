import { DarkTheme } from '@react-navigation/native';

import { theme } from '../theme';

declare module 'styled-components' {
    type ThemeOptions = typeof theme;

    export interface DefaultTheme extends ThemeOptions {}
}
