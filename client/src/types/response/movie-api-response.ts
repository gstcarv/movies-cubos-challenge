import { MovieInfo } from '../movie-info';
import { ApiResponse } from '../server/api-response';

export type MoviesApiResponse = ApiResponse<MovieInfo[]>;
