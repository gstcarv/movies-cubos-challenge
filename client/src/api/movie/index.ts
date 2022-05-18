import { api } from '..';
import { MovieInfo } from '../../types/movie-info';
import { ApiResponse } from '../../types/server/api-response';

export const MovieApi = {
    fetchMovies() {
        return api.get<ApiResponse<MovieInfo[]>>('/list/1');
    },
};
