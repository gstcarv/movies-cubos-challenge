import { waitFor } from '@testing-library/react';
import MovieVideo from '.';
import { render } from '../../../config/test';
import { getDetailedMovieMock } from '../../../utils/test-utils/mocks/movie-mocks';
import { MoviesServerMocks } from '../../../utils/test-utils/server-mocks/movies-server-mocks';

const mockMovie = getDetailedMovieMock();

jest.mock('..', () => ({
    useMovieDetails: () => ({ movieDetails: mockMovie }),
}));

describe('<MovieVideo />', () => {
    test('should fetch movie videos and render iframe', async () => {
        const { getByTestId } = render(<MovieVideo />);

        MoviesServerMocks.handleSuccessVideoFetch();

        await waitFor(() => {
            expect(getByTestId('movie-video-frame')).toBeInTheDocument();
        });
    });
});
