import MovieRateCircle from '.';
import { render } from '../../config/test';

describe('<MovieRateCircle />', () => {
    test('should render with the correct percentage', () => {
        const { getByText } = render(<MovieRateCircle percentage={20}></MovieRateCircle>);

        expect(getByText('20%')).toBeInTheDocument();
    });
});
