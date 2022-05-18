import styled from 'styled-components';

export const Container = styled.main``;

export const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 40px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: normal;
`;
