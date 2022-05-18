import { createModel, RematchDispatch } from '@rematch/core';
import { RootModel } from '../';
import { MovieApi } from '../../api/movie';
import { MovieInfo } from '../../types/movie-info';

type MoviesStateModel = {
    movies: MovieInfo[];
    loading: boolean;
    error: boolean;
};

export const moviesModel = createModel<RootModel>()({
    state: {
        movies: [],
        loading: false,
        error: false,
    } as MoviesStateModel,

    reducers: {
        onMoviesFetchSuccess(state, movies: MovieInfo[]) {
            return {
                ...state,
                loading: false,
                movies: movies,
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
        async fetchMoviesAsync(payload, state) {
            try {
                dispatch.movies.onMoviesFetchBegin();

                const {
                    data: { results },
                } = await MovieApi.fetchMovies();

                dispatch.movies.onMoviesFetchSuccess(results);
            } catch (err) {
                dispatch.movies.onMoviesFetchError();
            }
        },
    }),
});
