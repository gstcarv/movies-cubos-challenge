import { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { MovieApi } from '../../api/movie';
import { DetailedMovieInfo } from '../../types/movie-info';
import MovieData from './MovieData';
import MovieVideo from './MovieVideo';
import { Container } from './styled';

type Params = { id: string };

type MovieDetailsContextType = {
    movieDetails?: DetailedMovieInfo;
};

const MovieDetailsContext = createContext<MovieDetailsContextType>({} as MovieDetailsContextType);

export default function MovieDetails() {
    const { id } = useParams<Params>();

    const { data: movieDetails } = useSWR(['movie', id], async () => (await MovieApi.getDetails(Number(id))).data);

    if (!movieDetails) {
        return null;
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
