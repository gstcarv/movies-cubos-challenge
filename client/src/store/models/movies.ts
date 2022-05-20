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
    options: {
        search: string;
        page: number;
    };
};

export const moviesModel = createModel<RootModel>()({
    state: {
        movies: [],
        totalPages: 1,
        loading: false,
        error: false,
        options: {
            page: 1,
            search: '',
        },
    } as MoviesStateModel,

    reducers: {
        onMoviesFetchSuccess(state, payload: { response: MoviesApiResponse; search: string }) {
            return {
                ...state,
                loading: false,
                movies: payload.response.results,
                totalPages: payload.response.total_pages,
                options: {
                    search: payload.search,
                    page: payload.response.page,
                },
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

        updateSearch(state, search: string) {
            return {
                ...state,
                options: {
                    ...state.options,
                    search,
                },
            };
        },

        updatePage(state, page: number) {
            return {
                ...state,
                options: {
                    ...state.options,
                    page,
                },
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

                dispatch.movies.onMoviesFetchSuccess({ response: result, search: payload.search ?? '' });
            } catch (err) {
                dispatch.movies.onMoviesFetchError();
            }
        },
    }),
});
