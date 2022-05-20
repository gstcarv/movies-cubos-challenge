import styled from 'styled-components';
import { ContentText, TitleLabel } from '../styled';

export const Container = styled.div`
    display: flex;
    margin-bottom: 36px;
    flex-wrap: wrap;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        margin-bottom: 12px;
    }
`;

export const InfoCol = styled.div`
    text-align: center;
    margin-right: 32px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        text-align: left;
    }
`;

export const InfoTitle = styled(TitleLabel)`
    ::after {
        display: none;
    }

    font-size: 22px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 2px;
    }
`;

export const InfoContentText = styled(ContentText)`
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 24px;
    }
`;
