import styled from 'styled-components';

export const Container = styled.section`
    padding: 56px 10%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 22px;
    }
`;
