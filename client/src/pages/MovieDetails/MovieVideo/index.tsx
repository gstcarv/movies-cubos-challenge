import React from 'react';
import { useMovieDetails } from '..';

type Props = {};

export default function MovieVideo({}: Props) {
    const {
        movieDetails: { video },
    } = useMovieDetails();

    if (!video) {
        return null;
    }

    return (
        <>
            <iframe
                width='100%'
                height='560'
                src='https://www.youtube.com/embed/989-7xsRLR4'
                title='Trailer'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            />
        </>
    );
}
