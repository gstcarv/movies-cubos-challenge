import styled from 'styled-components';
import { TitleLabel } from '../styled';

export const Container = styled.div`
    display: flex;
    margin-bottom: 36px;
`;

export const InfoCol = styled.div`
    text-align: center;
    margin-right: 32px;
`;

export const InfoTitle = styled(TitleLabel)`
    ::after {
        display: none;
    }

    font-size: 22px;
`;
