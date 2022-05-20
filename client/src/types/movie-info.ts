import { GenreInfo } from './genre-info';
import { MovieStatus } from './movie-status';

export type MovieInfo = {
    genre_ids: number[];
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: boolean;
};

export type DetailedMovieInfo = Omit<MovieInfo, 'genre_ids'> & {
    genres: GenreInfo[];
    budget: number;
    original_language: string;
    status: MovieStatus;
    revenue: number;
    runtime: number;
};
