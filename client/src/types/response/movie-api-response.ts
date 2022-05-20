import { MovieInfo } from '../movie-info';
import { ApiResponse } from '../server/api-response';
import { VideoData } from '../video-data';

export type MoviesApiResponse = ApiResponse<MovieInfo[]>;

export type MovieVideosApiResponse = ApiResponse<VideoData[]>;
