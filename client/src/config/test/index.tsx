import { render as defaultRender } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../../store';
import { SWRConfig } from 'swr';

// custom render function with the app providers to test
export const render = (element: ReactNode) =>
    defaultRender(
        // way to delete cache on SWR to execute tests properly
        <SWRConfig value={{ provider: () => new Map() }}>
            <ReduxProvider store={store}>
                <ThemeProvider theme={theme}>{element}</ThemeProvider>
            </ReduxProvider>
        </SWRConfig>
    );
