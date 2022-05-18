import { ThemeProvider } from 'styled-components';
import MainRouter from './config/routes/MainRouter';
import { theme } from './config/theme';
import GlobalStyles from './config/theme/globalStyles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainRouter />
        </ThemeProvider>
    );
}

export default App;
