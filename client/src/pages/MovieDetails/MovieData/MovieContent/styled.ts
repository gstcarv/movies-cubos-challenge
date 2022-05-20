import styled from 'styled-components';
import MovieRateCircle from '../../../../components/MovieRateCircle';

export const Container = styled.div`
    padding: 0 36px;
    padding-top: 24px;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    position: relative;
    min-height: 480px;
    width: 100%;
`;

export const TitleLabel = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 26px;
    font-weight: normal;
    margin-bottom: 8px;

    ::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.accent};
        margin-top: 6px;
        margin-bottom: 22px;
    }
`;

export const ContentText = styled.p`
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.gray[800]};
`;

export const RateCircle = styled(MovieRateCircle)`
    position: absolute;
    right: 25px;
    bottom: 25px;
`;
