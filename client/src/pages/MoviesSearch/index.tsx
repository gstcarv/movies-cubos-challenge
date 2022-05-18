import SearchField from '../../components/SearchField';
import MovieResultCard from './MovieResultCard';
import { Container, MoviesContainer } from './styled';

type Props = {};

export default function MoviesSearch({}: Props) {
    return (
        <Container>
            <SearchField onChange={(e) => console.log(e.target.value)} />

            <MoviesContainer>
                <MovieResultCard />

                <MovieResultCard />

                <MovieResultCard />
            </MoviesContainer>
        </Container>
    );
}
