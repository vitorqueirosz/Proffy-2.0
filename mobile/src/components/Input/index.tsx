import React, { useRef, useState, useCallback } from 'react';

import { TextInputProperties } from 'react-native';
import {
  Container, TextInput, ButtonSeePassword, SeePasswordIcon,
} from './styles';

import iconSeePassword from '../../assets/images/icons/seePassword.png';

import iconLockPassword from '../../assets/images/icons/lockPassword.png';

interface InputProps extends TextInputProperties {
    bottomInput?: boolean;
    iconPassword?: boolean;
    inputForm?: boolean;
    textArea?: boolean;
    shortInput?: boolean;
    selectInput?: boolean;

}

interface inputValueReference {
    value: string;
}

const Input: React.FC<InputProps> = ({
  bottomInput, iconPassword, inputForm, textArea, shortInput, selectInput, ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [inputType, setInputType] = useState(true);

  const handleSetFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSetBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef?.current.value);
  }, []);

  const handleChangeTypeInput = useCallback(() => {
    setInputType(!inputType);
  }, [inputType]);

  const inputRef = useRef<inputValueReference>({ value: '' });

  return (
    <Container
      isFocused={isFocused}
      inputForm={inputForm}
      textArea={textArea}
      shortInput={shortInput}
      bottomInput={bottomInput}
      selectInput={selectInput}
    >
      <TextInput
        onFocus={handleSetFocus}
        onBlur={handleSetBlur}
        secureTextEntry={bottomInput && inputType}

        {...rest}
      />

      {iconPassword && (
      <ButtonSeePassword onPress={handleChangeTypeInput}>
        <SeePasswordIcon source={inputType ? iconSeePassword : iconLockPassword} />
      </ButtonSeePassword>
      ) }
    </Container>
  );
};

export default Input;
