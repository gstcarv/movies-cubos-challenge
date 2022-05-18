import BaseLayout from '.';
import { render } from '../../../config/test';

describe('<BaseLayout />', () => {
    test('should render header with the correct page title', () => {
        const { getByText } = render(<BaseLayout>mock-content</BaseLayout>);

        expect(getByText('Movies')).toBeInTheDocument();
    });

    test('should render the layout content correctly', () => {
        const { getByText } = render(<BaseLayout>mock-content</BaseLayout>);

        expect(getByText('mock-content')).toBeInTheDocument();
    });
});
