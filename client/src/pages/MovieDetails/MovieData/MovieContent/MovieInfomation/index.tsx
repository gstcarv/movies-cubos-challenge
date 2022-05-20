import moment from 'moment';
import { useMovieDetails } from '../../..';
import { parseMovieStatus } from '../../../../../types/movie-status';
import { TimeUtils } from '../../../../../utils/time-utils';
import { ContentText, TitleLabel } from '../styled';
import { Container, InfoTitle, InfoCol } from './styled';

type Props = {};

export default function MovieInformation({}: Props) {
    const { movieDetails } = useMovieDetails();

    const { status, original_language, runtime, budget, revenue } = movieDetails!;

    function getMovieDuration() {
        const convert = TimeUtils.formatFromMinutes(runtime);
        return `${convert.hours}h${convert.minutes}m`;
    }

    const calculateMovieProfit = () => revenue - budget;

    return (
        <>
            <TitleLabel>Informações</TitleLabel>

            <Container>
                <InfoCol>
                    <InfoTitle>Situação</InfoTitle>
                    <ContentText data-testid='movie-status'>{parseMovieStatus(status)}</ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Idioma</InfoTitle>
                    <ContentText data-testid='movie-language'>{original_language.toUpperCase()}</ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Duração</InfoTitle>
                    <ContentText data-testid='movie-duration'>{getMovieDuration()}</ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Orçamento</InfoTitle>
                    <ContentText data-testid='movie-budget'>
                        {budget.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Receita</InfoTitle>
                    <ContentText data-testid='movie-revenue'>
                        {revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </ContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Lucro</InfoTitle>
                    <ContentText data-testid='movie-profit'>
                        {calculateMovieProfit().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </ContentText>
                </InfoCol>
            </Container>
        </>
    );
}
