import moment from 'moment';
import { useMovieDetails } from '../../..';
import { parseMovieStatus } from '../../../../../types/movie-status';
import { TimeUtils } from '../../../../../utils/time-utils';
import { TitleLabel } from '../styled';
import { Container, InfoTitle, InfoCol, InfoContentText } from './styled';

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
                    <InfoContentText data-testid='movie-status'>{parseMovieStatus(status)}</InfoContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Idioma</InfoTitle>
                    <InfoContentText data-testid='movie-language'>{original_language.toUpperCase()}</InfoContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Duração</InfoTitle>
                    <InfoContentText data-testid='movie-duration'>{getMovieDuration()}</InfoContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Orçamento</InfoTitle>
                    <InfoContentText data-testid='movie-budget'>
                        {budget.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </InfoContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Receita</InfoTitle>
                    <InfoContentText data-testid='movie-revenue'>
                        {revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </InfoContentText>
                </InfoCol>

                <InfoCol>
                    <InfoTitle>Lucro</InfoTitle>
                    <InfoContentText data-testid='movie-profit'>
                        {calculateMovieProfit().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </InfoContentText>
                </InfoCol>
            </Container>
        </>
    );
}
