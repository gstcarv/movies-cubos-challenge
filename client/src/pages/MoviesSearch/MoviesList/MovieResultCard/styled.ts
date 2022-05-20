import styled from 'styled-components';
import MovieRateCircle from '../../../../components/MovieRateCircle';

export const CardContainer = styled.div`
    display: flex;
    min-height: 400px;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    transition: filter 0.2s;

    :hover {
        filter: brightness(0.8);
        cursor: pointer;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
    }
`;

export const CardImageContainer = styled.div<{ posterUrl: string }>`
    background-image: url(${(props) => props.posterUrl});
    background-color: ${(props) => props.theme.colors.gray[700]};
    width: 250px;
    background-size: cover;
    background-position: center center;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        height: 600px;
        width: 100%;
    }
`;

export const CardInfoContainer = styled.div`
    position: relative;
    flex: 1;
`;

export const CardRate = styled(MovieRateCircle)`
    position: absolute;
    bottom: -45%;
    left: 24px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        left: 50%;
        transform: translate(-50%, -40%);
        bottom: -50%;
    }
` as typeof MovieRateCircle;

export const CardInfoContainerHeader = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100px;
    z-index: 0;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        min-height: 150px;
        height: auto;
    }
`;

export const CardInfoHeaderTitle = styled.div`
    position: absolute;
    bottom: -30px;
    left: 140px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        position: static;
        text-align: center;
        padding: 36px 12px 60px 12px;
    }
`;

export const CardMovieName = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 8px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 24px;
    }
`;

export const CardMovieDate = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray[700]};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: normal;
`;

export const CardInfoContainerContent = styled.div`
    padding: 70px 40px;
    padding-bottom: 24px;
    text-align: justify;
`;

export const CardMovieDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray[800]};
    margin-bottom: 24px;
`;
