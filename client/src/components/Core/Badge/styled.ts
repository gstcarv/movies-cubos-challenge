import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.body};
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 16px;
`;
