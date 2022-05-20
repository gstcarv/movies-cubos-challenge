import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const StyledPagination = styled(ReactPaginate)`
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;

    .pagination {
        &__next,
        &__previous {
            display: none;
        }

        &__page {
            border-radius: 100px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;

            &--is-active {
                background-color: ${({ theme }) => theme.colors.primary};
                height: 45px;
                width: 45px;
            }

            &__link {
                border-radius: 100px;
                height: 35px;
                width: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${({ theme }) => theme.colors.primary};
                font-family: ${({ theme }) => theme.fonts.body};
                font-size: 16px;
                cursor: pointer;

                &--is-active {
                    background-color: ${({ theme }) => theme.colors.primary};
                    border: 2px solid ${({ theme }) => theme.colors.accent};
                    font-size: 22px;
                    color: ${({ theme }) => theme.colors.accent};
                }
            }
        }
    }
`;
