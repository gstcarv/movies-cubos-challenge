import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 56px;
`;

export const MoviesContainer = styled.div`
    > div {
        margin-bottom: 32px;
    }
`;

export const NoResultsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.primary};
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;
