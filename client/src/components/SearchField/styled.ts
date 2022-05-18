import styled from 'styled-components';

export const Field = styled.input`
    border: none;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    width: 100%;
    padding: 16px 32px;
    border-radius: 100px;
    outline-color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;

    ::placeholder {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
