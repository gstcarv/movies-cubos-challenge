import React from 'react';
import { Container } from './styled';

type Props = {
    children: string;
    className?: string;
};

export default function Badge({ children, className }: Props) {
    return (
        <Container data-testid='badge' className={className}>
            {children}
        </Container>
    );
}
