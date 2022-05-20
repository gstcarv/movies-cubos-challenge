import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import { useMovieDetails } from '..';
import { MovieApi } from '../../../api/movie';

type Props = {};

export default function MovieVideo({}: Props) {
    const {
        movieDetails: { video, id },
    } = useMovieDetails();

    const { data: videos, error } = useSWR(
        video ? ['videos', id] : null,
        async () => (await MovieApi.getVideos(id)).data
    );

    if (!video || error) {
        return null;
    }

    if (!videos?.results && !error) {
        return <Skeleton height={560} />;
    }

    return (
        <>
            {videos?.results.map(
                (v) =>
                    v.site === 'YouTube' && (
                        <iframe
                            key={v.key}
                            width='100%'
                            height={v.size < 560 ? '560' : v.size}
                            src={`https://www.youtube.com/embed/${v.key}`}
                            title='Trailer'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            data-testid='movie-video-frame'
                        />
                    )
            )}
        </>
    );
}
