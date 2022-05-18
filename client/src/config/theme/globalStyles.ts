import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.text};
    }
`;

export default GlobalStyles;
