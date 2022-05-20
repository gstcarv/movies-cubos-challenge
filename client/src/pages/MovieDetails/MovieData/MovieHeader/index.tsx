import moment from 'moment';
import { useMovieDetails } from '../..';
import { Container, MovieName, MovieDate } from './styled';

type Props = {};

export default function MovieHeader({}: Props) {
    const { movieDetails } = useMovieDetails();

    const { title, release_date } = movieDetails!;

    return (
        <Container>
            <MovieName>{title}</MovieName>
            <MovieDate>{moment(release_date).format('DD/MM/YYYY')}</MovieDate>
        </Container>
    );
}
