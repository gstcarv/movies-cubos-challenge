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
`;

export const CardImageContainer = styled.div<{ posterUrl: string }>`
    background-image: url(${(props) => props.posterUrl});
    width: 250px;
    background-size: cover;
    background-position: center center;
`;

export const CardInfoContainer = styled.div`
    position: relative;
    flex: 1;
`;

export const CardRate = styled(MovieRateCircle)`
    position: absolute;
    bottom: -45%;
    left: 24px;
` as typeof MovieRateCircle;

export const CardInfoContainerHeader = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100px;
    z-index: 0;
`;

export const CardInfoHeaderTitle = styled.div`
    position: absolute;
    bottom: -30px;
    left: 140px;
`;

export const CardMovieName = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 8px;
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
`;

export const CardMovieDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray[800]};
    margin-bottom: 24px;
`;

export const MovieGenderContainer = styled.div`
    display: flex;

    > div {
        margin-right: 8px;
    }
`;
