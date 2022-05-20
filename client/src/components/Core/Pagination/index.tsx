import { ReactPaginateProps } from 'react-paginate';
import { StyledPagination } from './styled';

type Props = ReactPaginateProps;

export default function Pagination(props: Props) {
    return (
        <StyledPagination
            {...props}
            // increase 1 because the api pages start from 1
            onPageChange={(p) => props.onPageChange?.({ selected: p.selected + 1 })}
            forcePage={(props.forcePage ?? 1) - 1}
            className='pagination'
            nextClassName='pagination__next'
            previousClassName='pagination__previous'
            pageClassName='pagination__page'
            pageLinkClassName='pagination__page__link'
            activeClassName='pagination__page--is-active'
            activeLinkClassName='pagination__page__link--is-active'
            breakLinkClassName='pagination__page__link'
        />
    );
}
