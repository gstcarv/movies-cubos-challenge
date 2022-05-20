import { useCallback } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import { GenreApi } from '../../api/genre';
import { GenreInfo } from '../../types/genre-info';
import Badge from '../Core/Badge';
import { MovieGenderContainer } from './styled';

type Props = {
    genreIds?: number[];

    // preloaded genres data
    genres?: GenreInfo[];
};

export default function GenreBadgeList({ genreIds = [], genres }: Props) {
    // if genre provided, get their ids
    const ids = genres?.map((g) => g.id) || genreIds;

    const { data } = useSWR(
        // don't request if genres already provided
        !genres ? 'genres' : null,
        async () => (await GenreApi.fetchAllGenres()).data
    );

    const findGenreById = useCallback(
        (id: number) => {
            return (genres || data?.genres || []).find((g) => g.id === id);
        },
        [data]
    );

    if (!data && !genres) {
        // loading skeleton
        return (
            <MovieGenderContainer>
                {ids.map((id) => (
                    <Skeleton
                        key={id}
                        data-containerTestId='badges-loading'
                        height={30}
                        width={100}
                        style={{ marginRight: 10, borderRadius: 100 }}
                    />
                ))}
            </MovieGenderContainer>
        );
    }

    return (
        <MovieGenderContainer>
            {ids.map((id) => (
                <Badge key={id}>{findGenreById(id)?.name || '-'}</Badge>
            ))}
        </MovieGenderContainer>
    );
}
