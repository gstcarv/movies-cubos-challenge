import MovieContent from './MovieContent';
import MovieHeader from './MovieHeader';
import { Container, MovieBody, MovieImage } from './styled';

type Props = {};

export default function MovieData({}: Props) {
    return (
        <Container>
            <MovieHeader />

            <MovieBody>
                <MovieContent />

                <MovieImage />
            </MovieBody>
        </Container>
    );
}
