import { DetailedMovieInfo, MovieInfo } from '../../../types/movie-info';
import { VideoData } from '../../../types/video-data';
import { getGenreListMock } from './genres-mocks';

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

export const getDetailedMovieMock = (): DetailedMovieInfo => ({
    id: 1,
    original_title: 'movie-original-title',
    overview: 'movie-overview',
    poster_path: '/poster-path.jpg',
    release_date: new Date().toISOString(),
    title: 'movie-title',
    video: true,
    vote_average: 10,
    vote_count: true,
    budget: 1000,
    revenue: 3000,
    genres: getGenreListMock(),
    original_language: 'en',
    runtime: 60,
    status: 'Released',
});

export const getMovieVideosMock = (): VideoData[] => [
    {
        key: 'video-key',
        name: 'video-name',
        published_at: new Date().toISOString(),
        site: 'YouTube',
        size: 560,
    },
];

export const getMovieListMock = (): MovieInfo[] =>
    new Array(4).fill(getMovieMock()).map((d) => ({ ...d, id: Math.random() * 999999 }));
