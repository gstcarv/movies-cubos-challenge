import { api } from '..';
import { DetailedMovieInfo } from '../../types/movie-info';
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

    getDetails(id: number) {
        return api.get<DetailedMovieInfo>(`/3/movie/${id}`);
    },
};
