import { render } from '../../../config/test';
import Pagination from '.';
import { fireEvent } from '@testing-library/react';

describe('<Pagination />', () => {
    test('should render all page numbers correctly', () => {
        const { container } = render(<Pagination pageCount={5} />);

        expect(container.querySelectorAll('.pagination__page')).toHaveLength(5);
    });

    test('should call onPageChange with the correct page number', () => {
        const onPageChangeFn = jest.fn();

        const { container } = render(<Pagination pageCount={5} onPageChange={onPageChangeFn} />);

        const pages = container.querySelectorAll('.pagination__page__link');

        fireEvent.click(pages[1]);

        expect(onPageChangeFn).toBeCalledWith({ selected: 2 });
    });
});
