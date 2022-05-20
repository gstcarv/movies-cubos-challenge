import { GenreServerMocks } from '../../utils/test-utils/server-mocks/genres-server-mocks';
import { render } from '../../config/test';
import GenreBadgeList from '.';
import { waitFor } from '@testing-library/react';
import { getGenreListMock } from '../../utils/test-utils/mocks/genres-mocks';

describe('<GenreBadgeList />', () => {
    test('should fetch and render all genre badges and hide loading skeleton', async () => {
        const { getAllByTestId, getByText, container } = render(<GenreBadgeList genreIds={[1, 2, 3]} />);

        GenreServerMocks.handleSuccessGenreListRequest();

        await waitFor(() => {
            expect(getAllByTestId('badge')).toHaveLength(getGenreListMock().length);
        });

        await waitFor(() => {
            getGenreListMock().forEach((g) => expect(getByText(g.name)).toBeInTheDocument());
            expect(container.querySelector('.react-loading-skeleton')).not.toBeInTheDocument();
        });
    });

    test('loading skeleton should be visible if fetching badges data', async () => {
        const { container } = render(<GenreBadgeList genreIds={[1, 2, 3]} />);

        GenreServerMocks.handleSuccessGenreListRequest();

        expect(container.querySelector('.react-loading-skeleton')).toBeInTheDocument();
    });
});
