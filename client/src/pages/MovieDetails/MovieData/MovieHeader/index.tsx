import { Container, MovieName, MovieDate } from './styled';

type Props = {};

export default function MovieHeader({}: Props) {
    return (
        <Container>
            <MovieName>Thor: Ragnarok</MovieName>
            <MovieDate>23/04/2002</MovieDate>
        </Container>
    );
}
