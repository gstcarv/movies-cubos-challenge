import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.gray[500]};
    padding: 0 36px;
`;

export const MovieName = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 40px;
    font-weight: normal;
`;

export const MovieDate = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray[700]};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: normal;
`;
