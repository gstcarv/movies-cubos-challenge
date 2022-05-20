import styled from 'styled-components';

export const Container = styled.section`
    margin: 36px 0;
`;

export const MovieBody = styled.div`
    display: flex;
`;

export const MovieImage = styled.div<{ posterUrl: string }>`
    width: 430px;
    background-image: url(${(props) => props.posterUrl});
    background-size: cover;
    background-position: center center;
`;
