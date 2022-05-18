import styled from 'styled-components';

export const CircleContainer = styled.div`
    width: 85px;
    height: 85px;
    background: ${({ theme }) => theme.colors.accent};
    border: 5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const PercentageContainer = styled.div`
    width: 90%;
    height: 90%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PercentageText = styled.span`
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.accent};
    font-size: 32px;
`;
