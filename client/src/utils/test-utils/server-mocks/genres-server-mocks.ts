import { base, server } from '.';
import { rest } from 'msw';
import { GenreApiResponse } from '../../../types/response/genre-api-response';
import { getGenreListMock } from '../mocks/genres-mocks';

export const GenreServerMocks = {
    handleSuccessGenreListRequest: () => {
        server.use(
            rest.get(base('/3/genre/movie/list'), (req, res, ctx) =>
                res(ctx.status(200), ctx.delay(200), ctx.json({ genres: getGenreListMock() } as GenreApiResponse))
            )
        );
    },
};
