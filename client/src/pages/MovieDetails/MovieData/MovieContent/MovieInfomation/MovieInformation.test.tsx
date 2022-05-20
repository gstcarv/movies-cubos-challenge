import MovieInformation from '.';
import { render } from '../../../../../config/test';
import { parseMovieStatus } from '../../../../../types/movie-status';
import { getDetailedMovieMock } from '../../../../../utils/test-utils/mocks/movie-mocks';

const mockMovie = getDetailedMovieMock();

jest.mock('../../..', () => ({
    useMovieDetails: () => ({ movieDetails: mockMovie }),
}));

describe('<MovieInformation />', () => {
    test('should render all information columns', () => {
        const { getByText } = render(<MovieInformation />);

        expect(getByText('Situação')).toBeInTheDocument();
        expect(getByText('Idioma')).toBeInTheDocument();
        expect(getByText('Duração')).toBeInTheDocument();
        expect(getByText('Orçamento')).toBeInTheDocument();
        expect(getByText('Receita')).toBeInTheDocument();
        expect(getByText('Lucro')).toBeInTheDocument();
    });

    test('should render all information from movie correctly', () => {
        const { getByTestId } = render(<MovieInformation />);

        expect(getByTestId('movie-status')).toHaveTextContent(parseMovieStatus(mockMovie.status));
        expect(getByTestId('movie-language')).toHaveTextContent(mockMovie.original_language.toUpperCase());
        expect(getByTestId('movie-duration')).toHaveTextContent('1h0m');
        expect(getByTestId('movie-budget')).toHaveTextContent('R$ 1.000,00');
        expect(getByTestId('movie-revenue')).toHaveTextContent('R$ 3.000,00');
        expect(getByTestId('movie-profit')).toHaveTextContent('R$ 2.000,00');
    });
});
