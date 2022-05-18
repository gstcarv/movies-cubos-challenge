import { fireEvent } from '@testing-library/react';
import SearchField from '.';
import BaseLayout from '.';
import { render } from '../../config/test';

describe('<SearchField />', () => {
    test('change field should call onChange prop', () => {
        const onChangeFn = jest.fn();
        const { getByTestId } = render(<SearchField onChange={onChangeFn} />);

        const field = getByTestId('search-field');

        fireEvent.change(field, { target: { value: 'mock-text' } });

        expect(onChangeFn).toBeCalled();
    });
});
