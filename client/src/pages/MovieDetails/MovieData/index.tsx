import { useMovieDetails } from '..';
import { MovieUtils } from '../../../utils/movie-utils';
import MovieContent from './MovieContent';
import MovieHeader from './MovieHeader';
import { Container, MovieBody, MovieImage } from './styled';

type Props = {};

export default function MovieData({}: Props) {
    const { movieDetails } = useMovieDetails();

    return (
        <Container>
            <MovieHeader />

            <MovieBody>
                <MovieContent />

                <MovieImage posterUrl={MovieUtils.getMoviePosterUrl(movieDetails!)} data-testid='movie-image' />
            </MovieBody>
        </Container>
    );
}
