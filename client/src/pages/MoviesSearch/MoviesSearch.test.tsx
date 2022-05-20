import { fireEvent, waitFor } from '@testing-library/react';
import MovieResultCard from '.';
import { render } from '../../config/test';
import { getMovieListMock } from '../../utils/test-utils/mocks/movie-mocks';
import { MoviesServerMocks } from '../../utils/test-utils/server-mocks/movies-server-mocks';

describe('<MoviesSearch />', () => {
    test('should render correctly', async () => {
        const { getByTestId } = render(<MovieResultCard />);

        MoviesServerMocks.handleSuccessMoviesFetch();

        expect(getByTestId('search-field')).toBeInTheDocument();
    });

    test('should run a new search request on search field changed ', async () => {
        const { getByTestId, queryAllByTestId } = render(<MovieResultCard />);

        MoviesServerMocks.handleEmptyResultsMoviesFetch();

        await waitFor(() => {
            expect(getByTestId('empty-movies-message')).toBeInTheDocument();
        });

        MoviesServerMocks.handleSuccessMoviesSearchFetch();

        const searchField = getByTestId('search-field');

        fireEvent.change(searchField, { target: { value: 'mock-search-text' } });

        await waitFor(() => {
            expect(queryAllByTestId('movie-card')).toHaveLength(getMovieListMock().length);
        });
    });
});
