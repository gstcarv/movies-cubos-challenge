import { ThemeProvider } from 'styled-components';
import MainRouter from './config/routes/MainRouter';
import { theme } from './config/theme';
import GlobalStyles from './config/theme/globalStyles';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <MainRouter />
            </ThemeProvider>
        </ReduxProvider>
    );
}

export default App;
