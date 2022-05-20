import moment from 'moment';
import MovieHeader from '.';
import { render } from '../../../../config/test';
import { getDetailedMovieMock } from '../../../../utils/test-utils/mocks/movie-mocks';

const mockMovie = getDetailedMovieMock();

jest.mock('../..', () => ({
    useMovieDetails: () => ({ movieDetails: mockMovie }),
}));

describe('<MovieHeader />', () => {
    test('should render movie name and release date correctly', () => {
        const { getByText } = render(<MovieHeader />);

        expect(getByText(mockMovie.title)).toBeInTheDocument();
        expect(getByText(moment(mockMovie.release_date).format('DD/MM/YYYY'))).toBeInTheDocument();
    });
});
