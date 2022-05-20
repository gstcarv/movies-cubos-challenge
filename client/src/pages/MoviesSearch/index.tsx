import { Container } from './styled';
import SearchField from '../../components/SearchField';
import { useDebounce } from 'use-debounce';
import MoviesList from './MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../store';

type Props = {};

export default function MoviesSearch({}: Props) {
    const searchValue = useSelector((state: RootState) => state.movies.options.search);

    const {
        movies: { updateSearch },
    } = useDispatch<Dispatch>();

    const [search] = useDebounce(searchValue, 700);

    return (
        <Container>
            <SearchField onChange={(e) => updateSearch(e.target.value)} value={searchValue} />

            <MoviesList searchText={search} />
        </Container>
    );
}
