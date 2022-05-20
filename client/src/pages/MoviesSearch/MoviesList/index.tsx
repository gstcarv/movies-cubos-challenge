import { useEffect, useState } from 'react';
import { MoviesContainer, PaginationContainer, Container, NoResultsContainer } from './styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../../store';
import MovieResultCard from './MovieResultCard';
import Pagination from '../../../components/Core/Pagination';
import Skeleton from 'react-loading-skeleton';

type Props = {
    searchText: string;
};

export default function MoviesList({ searchText }: Props) {
    const dispatch = useDispatch<Dispatch>();
    const moviesState = useSelector((state: RootState) => state.movies);

    const [currentPage, setCurrentPage] = useState(1);

    // set first page on change search text
    useEffect(() => setCurrentPage(1), [searchText]);

    // scroll to top of window on change page
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [currentPage]);

    useEffect(() => {
        dispatch.movies.fetchMoviesAsync({
            search: searchText,
            page: currentPage,
        });
    }, [searchText, currentPage]);

    return (
        <Container>
            {moviesState.loading && <Skeleton height={300} width={'100%'} count={5} />}

            {!moviesState.loading && moviesState.movies.length > 0 && (
                <MoviesContainer>
                    {moviesState.movies.map((movie) => (
                        <MovieResultCard movie={movie} key={movie.id} />
                    ))}
                </MoviesContainer>
            )}

            {!moviesState.loading && moviesState.movies.length === 0 && (
                <NoResultsContainer data-testid='empty-movies-message'>
                    <img src={require('../../../assets/images/no-results.png')} width={250} alt='No result found' />

                    <h1>Nenhum resultado encontrado. Pesquise por outra coisa!</h1>
                </NoResultsContainer>
            )}

            {moviesState.totalPages > 0 && (
                <PaginationContainer>
                    <Pagination
                        pageCount={moviesState.totalPages ?? 1}
                        onPageChange={(p) => setCurrentPage(p.selected)}
                        forcePage={currentPage ?? 1}
                    />
                </PaginationContainer>
            )}
        </Container>
    );
}
