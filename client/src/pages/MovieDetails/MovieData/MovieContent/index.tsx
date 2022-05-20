import GenreBadgeList from '../../../../components/GenreBadgeList';
import MovieInformation from './MovieInfomation';
import { Container, ContentText, RateCircle, TitleLabel } from './styled';

type Props = {};

export default function MovieContent({}: Props) {
    return (
        <Container>
            <TitleLabel>Sinopse</TitleLabel>

            <ContentText style={{ marginBottom: 36 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eos a voluptas expedita ipsum delectus
                fugit, provident rem? Ipsa eligendi placeat assumenda laudantium architecto eveniet, incidunt eum cum
                itaque voluptate!
            </ContentText>

            <MovieInformation />

            <GenreBadgeList genreIds={[12, 16]} />

            <RateCircle percentage={20} />
        </Container>
    );
}
