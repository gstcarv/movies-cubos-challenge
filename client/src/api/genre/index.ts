import { api } from '..';
import { GenreApiResponse } from '../../types/response/genre-api-response';

export const GenreApi = {
    fetchAllGenres() {
        return api.get<GenreApiResponse>('/3/genre/movie/list');
    },
};
