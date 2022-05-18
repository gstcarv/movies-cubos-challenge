import { MovieInfo } from '../types/movie-info';

export const MovieUtils = {
    getMoviePosterUrl(movie: MovieInfo) {
        return `${process.env.REACT_APP_IMAGE_REPOSITORY_URL}/w400${movie.poster_path}`;
    },
};
