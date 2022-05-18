import React from 'react';
import { CircleContainer, PercentageContainer, PercentageText } from './styled';

type Props = {
    percentage: number;
    className?: string;
};

export default function MovieRateCircle({ percentage, className }: Props) {
    return (
        <CircleContainer className={className}>
            <PercentageContainer>
                <PercentageText>{percentage}%</PercentageText>
            </PercentageContainer>
        </CircleContainer>
    );
}
