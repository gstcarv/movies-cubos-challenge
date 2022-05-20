import { ReactNode } from 'react';
import { Container, HeaderContainer, HeaderTitle } from './styled';

type Props = { children: ReactNode };

export default function BaseLayout({ children }: Props) {
    return (
        <Container>
            <HeaderContainer>
                <HeaderTitle href='/'>Movies</HeaderTitle>
            </HeaderContainer>

            {children}
        </Container>
    );
}
