import styled from 'styled-components';

export const Container = styled.section`
    margin: 36px 0;
    background-color: ${(props) => props.theme.colors.gray[400]};
`;

export const MovieBody = styled.div`
    display: flex;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;

export const MovieImage = styled.div<{ posterUrl: string }>`
    width: 360px;
    background-image: url(${(props) => props.posterUrl});
    background-color: ${(props) => props.theme.colors.gray[700]};
    background-size: cover;
    background-position: center center;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 550px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin: 20px 0;
        width: 400px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        width: 90%;
    }
`;
