export type MovieStatus = 'Rumored' | 'Planned' | 'Production' | 'Post' | 'In Production' | 'Released' | 'Canceled';

export function parseMovieStatus(status: MovieStatus) {
    const names: Record<MovieStatus, string> = {
        'In Production': 'Em produção',
        Canceled: 'Cancelado',
        Planned: 'Planejado',
        Post: 'Postado',
        Production: 'Produção',
        Released: 'Lançado',
        Rumored: 'Rumor',
    };

    return names[status];
}
