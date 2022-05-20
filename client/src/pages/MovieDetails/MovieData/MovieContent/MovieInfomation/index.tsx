import { ContentText, TitleLabel } from '../styled';
import { Container, InfoTitle, InfoCol } from './styled';

type Props = {};

export default function MovieInformation({}: Props) {
    return (
        <>
            <TitleLabel>Informações</TitleLabel>

            <Container>
                <InfoCol>
                    <InfoTitle>Situação</InfoTitle>
                    <ContentText>hello world</ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Idioma</InfoTitle>
                    <ContentText>hello world</ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Duração</InfoTitle>
                    <ContentText>hello world</ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Orçamento</InfoTitle>
                    <ContentText>hello world</ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Receita</InfoTitle>
                    <ContentText>hello world</ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Lucro</InfoTitle>
                    <ContentText>hello world</ContentText>
                </InfoCol>
            </Container>
        </>
    );
}
