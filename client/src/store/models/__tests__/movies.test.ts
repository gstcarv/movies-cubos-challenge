import { waitFor } from '@testing-library/react';
import { store } from '../..';
import { getMovieListMock } from '../../../utils/test-utils/mocks/movie-mocks';
import { MoviesServerMocks } from '../../../utils/test-utils/server-mocks/movies-server-mocks';

describe('[movies] model', () => {
    it('fetchMoviesAsync effect should load data and save into state', async () => {
        MoviesServerMocks.handleSuccessMoviesFetch();

        await store.dispatch.movies.fetchMoviesAsync({ search: '', page: 1 });

        await waitFor(() => {
            const moviesData = store.getState().movies;
            expect(moviesData.movies).toHaveLength(getMovieListMock().length);
            expect(moviesData.loading).toBeFalsy();
        });
    });
});
