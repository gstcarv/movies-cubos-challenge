import { base, server } from '.';
import { rest } from 'msw';
import { getMovieListMock } from '../mocks/movie-mocks';
import { MoviesApiResponse } from '../../../types/response/movie-api-response';

export const MoviesServerMocks = {
    handleSuccessMoviesFetch: () => {
        server.use(
            rest.get(base('/4/list/1'), (req, res, ctx) =>
                res(
                    ctx.status(200),
                    ctx.delay(200),
                    ctx.json({ results: getMovieListMock(), total_pages: 10 } as MoviesApiResponse)
                )
            )
        );
    },

    handleEmptyResultsMoviesFetch: () => {
        server.use(
            rest.get(base('/4/list/1'), (req, res, ctx) =>
                res(
                    ctx.status(200),
                    ctx.delay(200),
                    ctx.json({ results: [], page: 0, total_pages: 0 } as MoviesApiResponse)
                )
            )
        );
    },

    handleSuccessMoviesSearchFetch: () => {
        server.use(
            rest.get(base('/4/search/movie'), (req, res, ctx) =>
                res(ctx.status(200), ctx.delay(200), ctx.json({ results: getMovieListMock() } as MoviesApiResponse))
            )
        );
    },
};
