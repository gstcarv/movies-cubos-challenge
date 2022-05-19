import { MovieInfo } from '../../../types/movie-info';

export const getMovieMock = (): MovieInfo => ({
    genre_ids: [],
    id: 1,
    original_title: 'movie-original-title',
    overview: 'movie-overview',
    poster_path: '/poster-path.jpg',
    release_date: new Date().toISOString(),
    title: 'movie-title',
    video: true,
    vote_average: 10,
    vote_count: true,
});

export const getMovieListMock = (): MovieInfo[] =>
    new Array(4).fill(getMovieMock()).map((d) => ({ ...d, id: Math.random() * 999999 }));
