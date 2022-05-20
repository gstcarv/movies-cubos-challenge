import { memo, useEffect, useState } from 'react';
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

function MoviesList({ searchText }: Props) {
    const dispatch = useDispatch<Dispatch>();

    const movies = useSelector((state: RootState) => state.movies.movies);
    const isLoading = useSelector((state: RootState) => state.movies.loading);
    const currentPage = useSelector((state: RootState) => state.movies.options.page);
    const totalPages = useSelector((state: RootState) => state.movies.totalPages);

    // scroll to top of window on change page
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [currentPage]);

    useEffect(() => {
        if (!isLoading) {
            dispatch.movies.fetchMoviesAsync({
                search: searchText,
                page: currentPage,
            });
        }
    }, [searchText, currentPage]);

    return (
        <Container>
            {isLoading && <Skeleton height={300} width={'100%'} count={5} />}

            {!isLoading && movies.length > 0 && (
                <MoviesContainer>
                    {movies.map((movie) => (
                        <MovieResultCard movie={movie} key={movie.id} />
                    ))}
                </MoviesContainer>
            )}

            {!isLoading && movies.length === 0 && (
                <NoResultsContainer data-testid='empty-movies-message'>
                    <img src={require('../../../assets/images/no-results.png')} width={250} alt='No result found' />

                    <h1>Nenhum resultado encontrado. Pesquise por outra coisa!</h1>
                </NoResultsContainer>
            )}

            {totalPages > 0 && (
                <PaginationContainer>
                    <Pagination
                        pageCount={totalPages ?? 1}
                        onPageChange={(p) => dispatch.movies.updatePage(p.selected)}
                        forcePage={currentPage ?? 1}
                    />
                </PaginationContainer>
            )}
        </Container>
    );
}

export default memo(MoviesList);
