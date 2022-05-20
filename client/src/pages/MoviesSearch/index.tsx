import { useState } from 'react';
import { Container } from './styled';
import SearchField from '../../components/SearchField';
import { useDebounce } from 'use-debounce';
import MoviesList from './MoviesList';

type Props = {};

export default function MoviesSearch({}: Props) {
    const [searchValue, setSearchValue] = useState('');
    const [search] = useDebounce(searchValue, 700);

    return (
        <Container>
            <SearchField onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />

            <MoviesList searchText={search} />
        </Container>
    );
}
