import { useMovieDetails } from '../..';
import GenreBadgeList from '../../../../components/GenreBadgeList';
import MovieInformation from './MovieInfomation';
import { Container, ContentText, RateCircle, TitleLabel } from './styled';

type Props = {};

export default function MovieContent({}: Props) {
    const { movieDetails } = useMovieDetails();

    const { overview, vote_average, genres } = movieDetails!;

    return (
        <Container>
            <TitleLabel>Sinopse</TitleLabel>

            <ContentText style={{ marginBottom: 36 }}>{overview}</ContentText>

            <MovieInformation />

            <GenreBadgeList genres={genres} />

            <RateCircle percentage={vote_average} />
        </Container>
    );
}
