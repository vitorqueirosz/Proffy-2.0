import React, {
  InputHTMLAttributes, useCallback, useState, useRef,
} from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const InputForm: React.FC<InputProps> = ({
  name, label, ...rest
}) => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <input name={name} {...rest} />
  </Container>
);

export default InputForm;
