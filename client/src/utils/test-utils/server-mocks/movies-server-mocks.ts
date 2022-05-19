import { base, server } from '.';
import { rest } from 'msw';
import { getMovieListMock } from '../mocks/movie-mocks';

export const MoviesServerMocks = {
    handleSuccessMoviesFetch: () => {
        server.use(
            rest.get(base('/list/1'), (req, res, ctx) =>
                res(ctx.status(200), ctx.delay(200), ctx.json({ results: getMovieListMock() }))
            )
        );
    },
};
