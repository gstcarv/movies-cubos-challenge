import styled from 'styled-components';
import MovieRateCircle from '../../../../components/MovieRateCircle';

export const Container = styled.div`
    padding: 0 36px;
    padding-top: 24px;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    position: relative;
    min-height: 480px;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 72px;
    overflow: hidden;
    flex: 1;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-bottom: 32px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 0 18px;
    }
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

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        text-align: justify;
    }
`;

export const RateCircle = styled(MovieRateCircle)`
    position: absolute;
    right: 25px;
    bottom: 25px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        position: static;
        margin-top: 32px;
        margin-bottom: 32px;
    }
`;
