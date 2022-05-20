import { useCallback } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import { GenreApi } from '../../api/genre';
import Badge from '../Core/Badge';
import { MovieGenderContainer } from './styled';

type Props = { genreIds: number[] };

export default function GenreBadgeList({ genreIds }: Props) {
    const { data } = useSWR('genres', async () => (await GenreApi.fetchAllGenres()).data);

    const findGenreById = useCallback(
        (id: number) => {
            return data?.genres.find((g) => g.id === id);
        },
        [data]
    );

    if (!data) {
        // loading skeleton
        return (
            <MovieGenderContainer>
                {genreIds.map((id) => (
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
            {genreIds.map((id) => (
                <Badge key={id}>{findGenreById(id)?.name || '-'}</Badge>
            ))}
        </MovieGenderContainer>
    );
}
