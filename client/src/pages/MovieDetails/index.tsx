import MovieData from './MovieData';
import MovieVideo from './MovieVideo';
import { Container } from './styled';

type Props = {};

export default function MovieDetails({}: Props) {
    return (
        <Container>
            <MovieData />

            <MovieVideo />
        </Container>
    );
}
