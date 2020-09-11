import React, {
  useRef, useState, InputHTMLAttributes, useCallback,
} from 'react';

import showPasswordIcon from '../../assets/images/icons/show.svg';

import { Container, ShowPasswordButton } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label?: string;
    classNameInput?: string;
    showPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  name, label, classNameInput, showPassword, type, ...rest
}) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState<string>('password');

  const handleShowPassword = useCallback(() => {
    setIsVisiblePassword(isVisiblePassword === 'password' ? 'text' : 'password');
  }, [isVisiblePassword]);

  return (
    <Container>
      {/* <div> */}
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type || isVisiblePassword}
        className={classNameInput}
        {...rest}
      />
      {showPassword && (

        <ShowPasswordButton type="button" onClick={handleShowPassword}>
          {' '}
          <img src={showPasswordIcon} alt="Mostrar senha" />
        </ShowPasswordButton>

      )}
      {/* </div> */}
    </Container>
  );
};

export default Input;
