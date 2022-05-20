import MovieResultCard from '.';
import { render } from '../../../../config/test';
import { getMovieMock } from '../../../../utils/test-utils/mocks/movie-mocks';
import moment from 'moment';
import { GenreServerMocks } from '../../../../utils/test-utils/server-mocks/genres-server-mocks';

describe('<MovieResultCard />', () => {
    test('should render with the movie data correctly', () => {
        const { getByTestId } = render(<MovieResultCard movie={getMovieMock()} />);

        GenreServerMocks.handleSuccessGenreListRequest();

        expect(getByTestId('movie-title')).toHaveTextContent(getMovieMock().title);
        expect(getByTestId('movie-date')).toHaveTextContent(moment(getMovieMock().release_date).format('DD/MM/YYYY'));
        expect(getByTestId('movie-description')).toHaveTextContent(getMovieMock().overview);
    });
});
