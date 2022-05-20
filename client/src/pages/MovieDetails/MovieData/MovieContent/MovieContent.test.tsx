import MovieContent from '.';
import { render } from '../../../../config/test';
import { getDetailedMovieMock } from '../../../../utils/test-utils/mocks/movie-mocks';

const mockMovie = getDetailedMovieMock();

jest.mock('../..', () => ({
    useMovieDetails: () => ({ movieDetails: mockMovie }),
}));

describe('<MovieContent />', () => {
    test('should render mission overview info', () => {
        const { getByText } = render(<MovieContent />);

        expect(getByText('Sinopse')).toBeInTheDocument();
        expect(getByText(mockMovie.overview)).toBeInTheDocument();
    });

    test('rate circle should contains the correct rate value', () => {
        const { getByTestId } = render(<MovieContent />);

        const rateCircle = getByTestId('movie-rate-circle');

        expect(rateCircle).toHaveTextContent(mockMovie.vote_average.toString());
    });
});
