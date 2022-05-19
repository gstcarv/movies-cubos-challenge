import MovieResultCard from '.';
import moment from 'moment';
import { render } from '../../config/test';
import { waitFor } from '@testing-library/react';
import { MoviesServerMocks } from '../../utils/test-utils/server-mocks/movies-server-mocks';
import { getMovieListMock } from '../../utils/test-utils/mocks/movie-mocks';

describe('<MovieResultCard />', () => {
    test('should render all fetched movies into the list', async () => {
        const { getAllByTestId } = render(<MovieResultCard />);

        MoviesServerMocks.handleSuccessMoviesFetch();

        await waitFor(() => {
            expect(getAllByTestId('movie-card')[0]).toBeInTheDocument();
        });

        expect(getAllByTestId('movie-card')).toHaveLength(getMovieListMock().length);
    });
});
