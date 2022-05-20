import { base, server } from '.';
import { rest } from 'msw';
import { getMovieListMock } from '../mocks/movie-mocks';
import { ApiResponse } from '../../../types/server/api-response';
import { MovieInfo } from '../../../types/movie-info';

export const MoviesServerMocks = {
    handleSuccessMoviesFetch: () => {
        server.use(
            rest.get(base('/list/1'), (req, res, ctx) =>
                res(
                    ctx.status(200),
                    ctx.delay(200),
                    ctx.json({ results: getMovieListMock(), total_pages: 10 } as ApiResponse<MovieInfo[]>)
                )
            )
        );
    },

    handleEmptyResultsMoviesFetch: () => {
        server.use(
            rest.get(base('/list/1'), (req, res, ctx) =>
                res(
                    ctx.status(200),
                    ctx.delay(200),
                    ctx.json({ results: [], page: 0, total_pages: 0 } as ApiResponse<MovieInfo[]>)
                )
            )
        );
    },

    handleSuccessMoviesSearchFetch: () => {
        server.use(
            rest.get(base('/search/movie'), (req, res, ctx) =>
                res(
                    ctx.status(200),
                    ctx.delay(200),
                    ctx.json({ results: getMovieListMock() } as ApiResponse<MovieInfo[]>)
                )
            )
        );
    },
};
