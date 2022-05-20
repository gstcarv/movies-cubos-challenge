import React from 'react';

type Props = {};

export default function MovieVideo({}: Props) {
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
