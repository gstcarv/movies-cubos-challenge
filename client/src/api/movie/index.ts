import { api } from '..';
import { MovieInfo } from '../../types/movie-info';
import { ApiResponse } from '../../types/server/api-response';
import { PagedQuery } from '../../types/server/paged-query';

export const MovieApi = {
    fetchMovies(options: PagedQuery) {
        return api.get<ApiResponse<MovieInfo[]>>('/list/1', {
            params: {
                page: options.page,
            },
        });
    },

    searchMovies(searchText: string, options: PagedQuery) {
        return api.get<ApiResponse<MovieInfo[]>>('/search/movie', {
            params: {
                query: searchText,
                page: options.page,
            },
        });
    },
};
