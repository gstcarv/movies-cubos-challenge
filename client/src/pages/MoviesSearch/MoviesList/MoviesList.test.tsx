import { render } from '../../../config/test';
import { fireEvent, waitFor } from '@testing-library/react';
import { MoviesServerMocks } from '../../../utils/test-utils/server-mocks/movies-server-mocks';
import { getMovieListMock } from '../../../utils/test-utils/mocks/movie-mocks';
import MoviesList from '.';
import { GenreServerMocks } from '../../../utils/test-utils/server-mocks/genres-server-mocks';

const scrollToMock = jest.fn();

window.scrollTo = scrollToMock;

describe('<MoviesList />', () => {
    beforeEach(() => GenreServerMocks.handleSuccessGenreListRequest());

    test('should render all fetched movies into the list', async () => {
        const { getAllByTestId } = render(<MoviesList searchText='' />);

        MoviesServerMocks.handleSuccessMoviesFetch();

        await waitFor(() => {
            expect(getAllByTestId('movie-card')[0]).toBeInTheDocument();
        });

        expect(getAllByTestId('movie-card')).toHaveLength(getMovieListMock().length);
    });

    test('should render empty results message if no results found', async () => {
        const { getByTestId, getByText } = render(<MoviesList searchText='' />);

        MoviesServerMocks.handleEmptyResultsMoviesFetch();

        await waitFor(() => {
            expect(getByTestId('empty-movies-message')).toBeInTheDocument();
            expect(getByText('Nenhum resultado encontrado. Pesquise por outra coisa!')).toBeInTheDocument();
        });
    });

    test('should scroll window to top on change page', async () => {
        const { getAllByTestId, container } = render(<MoviesList searchText='' />);

        MoviesServerMocks.handleSuccessMoviesFetch();

        await waitFor(() => {
            expect(getAllByTestId('movie-card')[0]).toBeInTheDocument();

            expect(container.querySelector('.pagination')).toBeInTheDocument();
        });

        fireEvent.click(container.querySelectorAll('.pagination__page__link')[0]);

        expect(scrollToMock).toBeCalledWith({ behavior: 'smooth', top: 0 });
    });
});
