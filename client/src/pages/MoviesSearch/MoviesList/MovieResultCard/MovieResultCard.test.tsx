import MovieResultCard from '.';
import { render } from '../../../../config/test';
import { getMovieMock } from '../../../../utils/test-utils/mocks/movie-mocks';
import moment from 'moment';
import { GenreServerMocks } from '../../../../utils/test-utils/server-mocks/genres-server-mocks';
import { fireEvent } from '@testing-library/react';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

describe('<MovieResultCard />', () => {
    test('should render with the movie data correctly', () => {
        const { getByTestId } = render(<MovieResultCard movie={getMovieMock()} />);

        GenreServerMocks.handleSuccessGenreListRequest();

        expect(getByTestId('movie-title')).toHaveTextContent(getMovieMock().title);
        expect(getByTestId('movie-date')).toHaveTextContent(moment(getMovieMock().release_date).format('DD/MM/YYYY'));
        expect(getByTestId('movie-description')).toHaveTextContent(getMovieMock().overview);
    });

    test('should navigate to movie details on click card', () => {
        const { getByTestId } = render(<MovieResultCard movie={getMovieMock()} />);

        GenreServerMocks.handleSuccessGenreListRequest();

        const card = getByTestId('movie-card');
        fireEvent.click(card);

        expect(mockNavigate).toBeCalledWith(`movie/${getMovieMock().id}`);
    });
});
