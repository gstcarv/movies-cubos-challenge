import { createContext, useContext, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { MovieApi } from '../../api/movie';
import { DetailedMovieInfo } from '../../types/movie-info';
import MovieData from './MovieData';
import MovieVideo from './MovieVideo';
import { Container } from './styled';

type Params = { id: string };

type MovieDetailsContextType = {
    movieDetails: DetailedMovieInfo;
};

const MovieDetailsContext = createContext<MovieDetailsContextType>({} as MovieDetailsContextType);

export default function MovieDetails() {
    const { id } = useParams<Params>();
    const navigate = useNavigate();

    const { data: movieDetails, error } = useSWR(
        ['movie', id],
        async () => (await MovieApi.getDetails(Number(id))).data
    );

    // exit from page if the movie details was not found
    useEffect(() => {
        if (error && !movieDetails) {
            navigate('/');
        }
    }, [error, movieDetails]);

    if (!movieDetails) {
        return <Skeleton height={550} style={{ marginTop: 36 }} />;
    }

    return (
        <MovieDetailsContext.Provider value={{ movieDetails: movieDetails! }}>
            <Container>
                <MovieData />

                <MovieVideo />
            </Container>
        </MovieDetailsContext.Provider>
    );
}

export const useMovieDetails = () => useContext(MovieDetailsContext);
