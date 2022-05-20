import { waitFor } from '@testing-library/react';
import MovieDetails from '.';
import { render } from '../../config/test';
import { getDetailedMovieMock } from '../../utils/test-utils/mocks/movie-mocks';
import { MoviesServerMocks } from '../../utils/test-utils/server-mocks/movies-server-mocks';

const mockMovie = getDetailedMovieMock();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useParams: () => ({ id: 1 }),
    useNavigate: () => mockNavigate,
}));

describe('<MovieDetails />', () => {
    test('should fetch and render all movie details correctly', async () => {
        const { getByText } = render(<MovieDetails />);

        MoviesServerMocks.handleSuccessMovieDetailsFetch();

        await waitFor(() => {
            expect(getByText(mockMovie.title)).toBeInTheDocument();
            expect(getByText(mockMovie.overview)).toBeInTheDocument();
        });
    });

    test('should back to the main page if error occurs fetching the movie data', async () => {
        render(<MovieDetails />);

        MoviesServerMocks.handleErrorMovieDetailsFetch();

        await waitFor(() => {
            expect(mockNavigate).toBeCalledWith('/');
        });
    });
});
