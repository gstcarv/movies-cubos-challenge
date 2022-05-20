import Badge from '../../../../components/Core/Badge';
import { MovieInfo } from '../../../../types/movie-info';
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
} from './styled';
import moment from 'moment';
import { MovieUtils } from '../../../../utils/movie-utils';
import GenreBadgeList from '../../../../components/GenreBadgeList';

type Props = {
    movie: MovieInfo;
};

export default function MovieResultCard({ movie }: Props) {
    return (
        <CardContainer data-testid='movie-card'>
            <CardImageContainer posterUrl={MovieUtils.getMoviePosterUrl(movie)} />
            <CardInfoContainer>
                <CardInfoContainerHeader>
                    <CardRate percentage={movie.vote_average} />

                    <CardInfoHeaderTitle>
                        <CardMovieName data-testid='movie-title'>{movie.title}</CardMovieName>
                        <CardMovieDate data-testid='movie-date'>
                            {moment(movie.release_date).format('DD/MM/YYYY')}
                        </CardMovieDate>
                    </CardInfoHeaderTitle>
                </CardInfoContainerHeader>

                <CardInfoContainerContent>
                    <CardMovieDescription data-testid='movie-description'>{movie.overview}</CardMovieDescription>

                    <GenreBadgeList genreIds={movie.genre_ids} />
                </CardInfoContainerContent>
            </CardInfoContainer>
        </CardContainer>
    );
}
