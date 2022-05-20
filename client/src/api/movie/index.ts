import { api } from '..';
import { MoviesApiResponse } from '../../types/response/movie-api-response';
import { PagedQuery } from '../../types/server/paged-query';

export const MovieApi = {
    fetchMovies(options: PagedQuery) {
        return api.get<MoviesApiResponse>('/4/list/1', {
            params: {
                page: options.page,
            },
        });
    },

    searchMovies(searchText: string, options: PagedQuery) {
        return api.get<MoviesApiResponse>('/4/search/movie', {
            params: {
                query: searchText,
                page: options.page,
            },
        });
    },
};
