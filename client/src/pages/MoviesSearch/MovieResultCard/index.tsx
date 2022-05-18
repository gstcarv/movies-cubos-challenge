import Badge from '../../../components/Core/Badge';
import { MovieInfo } from '../../../types/movie-info';
import {
    CardContainer,
    CardImageContainer,
    CardInfoContainer,
    CardInfoContainerContent,
    CardInfoContainerHeader,
    CardInfoHeaderTitle,
    CardMovieDate,
    CardMovieDescription,
    CardMovieName,
    CardRate,
    MovieGenderContainer,
} from './styled';
import moment from 'moment';
import { MovieUtils } from '../../../utils/movie-utils';

type Props = {
    movie: MovieInfo;
};

export default function MovieResultCard({ movie }: Props) {
    return (
        <CardContainer>
            <CardImageContainer posterUrl={MovieUtils.getMoviePosterUrl(movie)} />
            <CardInfoContainer>
                <CardInfoContainerHeader>
                    <CardRate percentage={20} />

                    <CardInfoHeaderTitle>
                        <CardMovieName>{movie.title}</CardMovieName>
                        <CardMovieDate>{moment(movie.release_date).format('DD/MM/YYYY')}</CardMovieDate>
                    </CardInfoHeaderTitle>
                </CardInfoContainerHeader>

                <CardInfoContainerContent>
                    <CardMovieDescription>{movie.overview}</CardMovieDescription>

                    <MovieGenderContainer>
                        <Badge>Ação</Badge>
                        <Badge>Aventura</Badge>
                        <Badge>Romance</Badge>
                        <Badge>Mistério</Badge>
                    </MovieGenderContainer>
                </CardInfoContainerContent>
            </CardInfoContainer>
        </CardContainer>
    );
}
