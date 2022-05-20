import MovieData from '.';
import { render } from '../../../config/test';
import { getDetailedMovieMock } from '../../../utils/test-utils/mocks/movie-mocks';

const mockMovie = getDetailedMovieMock();

jest.mock('..', () => ({
    useMovieDetails: () => ({ movieDetails: mockMovie }),
}));

describe('<MovieData />', () => {
    test('should render elements correctly', () => {
        const { getByTestId } = render(<MovieData />);

        expect(getByTestId('movie-image')).toBeInTheDocument();
    });
});
