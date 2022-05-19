import { useEffect } from 'react';
import { Container, MoviesContainer } from './styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../store';

import SearchField from '../../components/SearchField';
import MovieResultCard from './MovieResultCard';

type Props = {};

export default function MoviesSearch({}: Props) {
    const dispatch = useDispatch<Dispatch>();

    const moviesState = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        dispatch.movies.fetchMoviesAsync(null);
    }, []);

    return (
        <Container>
            <SearchField onChange={(e) => console.log(e.target.value)} />

            <MoviesContainer>
                {moviesState.movies.map((movie) => (
                    <MovieResultCard movie={movie} key={movie.id} />
                ))}
            </MoviesContainer>
        </Container>
    );
}
