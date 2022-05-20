import { useMovieDetails } from '../../..';
import { ContentText, TitleLabel } from '../styled';
import { Container, InfoTitle, InfoCol } from './styled';

type Props = {};

export default function MovieInformation({}: Props) {
    const { movieDetails } = useMovieDetails();

    const { overview, vote_average, genres } = movieDetails!;

    return (
        <>
            <TitleLabel>Informações</TitleLabel>

            <Container>
                <InfoCol>
                    <InfoTitle>Situação</InfoTitle>
                    <ContentText></ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Idioma</InfoTitle>
                    <ContentText></ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Duração</InfoTitle>
                    <ContentText></ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Orçamento</InfoTitle>
                    <ContentText></ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Receita</InfoTitle>
                    <ContentText></ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Lucro</InfoTitle>
                    <ContentText></ContentText>
                </InfoCol>
            </Container>
        </>
    );
}
