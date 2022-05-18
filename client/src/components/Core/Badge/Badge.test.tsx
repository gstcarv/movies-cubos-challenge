import Badge from '.';
import { render } from '../../../config/test';

describe('<Badge />', () => {
    test('should render with the correct text', () => {
        const { getByText } = render(<Badge>mock-content</Badge>);

        expect(getByText('mock-content')).toBeInTheDocument();
    });
});
