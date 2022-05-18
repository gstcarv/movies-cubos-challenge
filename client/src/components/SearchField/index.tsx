import React, { HTMLProps, InputHTMLAttributes } from 'react';
import { Field } from './styled';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function SearchField(props: Props) {
    return <Field data-testid='search-field' {...props} placeholder='Busque filme por nome, ano ou gênero' />;
}
