import { render as defaultRender } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

// custom render function with the app providers to test
export const render = (element: ReactNode) => defaultRender(<ThemeProvider theme={theme}>{element}</ThemeProvider>);
