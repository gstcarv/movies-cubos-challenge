import { createModel } from '@rematch/core';
import { RootModel } from '../';
import { MovieApi } from '../../api/movie';
import { MovieInfo } from '../../types/movie-info';
import { MoviesApiResponse } from '../../types/response/movie-api-response';

type MoviesStateModel = {
    movies: MovieInfo[];
    loading: boolean;
    error: boolean;
    totalPages: number;
};

export const moviesModel = createModel<RootModel>()({
    state: {
        movies: [],
        totalPages: 1,
        loading: false,
        error: false,
    } as MoviesStateModel,

    reducers: {
        onMoviesFetchSuccess(state, payload: { movies: MovieInfo[]; totalPages: number }) {
            return {
                ...state,
                loading: false,
                movies: payload.movies,
                totalPages: payload.totalPages,
            };
        },

        onMoviesFetchError(state) {
            return {
                ...state,
                loading: false,
                error: true,
            };
        },

        onMoviesFetchBegin(state) {
            return {
                ...state,
                loading: true,
            };
        },
    },

    effects: (dispatch) => ({
        async fetchMoviesAsync(payload: { search?: string; page: number }, state) {
            try {
                dispatch.movies.onMoviesFetchBegin();

                let result: MoviesApiResponse;

                if (!payload.search) {
                    result = (await MovieApi.fetchMovies({ page: payload.page })).data;
                } else {
                    result = (await MovieApi.searchMovies(payload.search, { page: payload.page })).data;
                }

                dispatch.movies.onMoviesFetchSuccess({
                    movies: result.results,
                    totalPages: result.total_pages,
                });
            } catch (err) {
                dispatch.movies.onMoviesFetchError();
            }
        },
    }),
});
