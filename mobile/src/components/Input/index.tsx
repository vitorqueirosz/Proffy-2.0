import React, { useRef, useState, useCallback } from 'react';

import {  TextInputProps } from 'react-native';
import { mask, unMask } from 'remask';
import {
  Container, TextInput, ButtonSeePassword, SeePasswordIcon,
} from './styles';


import iconSeePassword from '../../assets/images/icons/seePassword.png';

import iconLockPassword from '../../assets/images/icons/lockPassword.png';
import { maskCep, maskPhone } from '../../utils/mask';

interface InputProps extends TextInputProps {
    bottomInput?: boolean;
    iconPassword?: boolean;
    inputForm?: boolean;
    textArea?: boolean;
    shortInput?: boolean;
    inputTime?: boolean;
    selectInput?: boolean;
    mask?: 'phone';
    inputMaskChange?: any;

}

const Input: React.FC<InputProps> = ({
  bottomInput,
  iconPassword,
  inputForm,
  textArea,
  shortInput,
  inputTime,
  selectInput,
  mask,
  inputMaskChange,

  ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    //   const [isFilled, setIsFilled] = useState(false);
    const [inputType, setInputType] = useState(true);

    const handleSetFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleSetBlur = useCallback(() => {
        setIsFocused(false);
        // setIsFilled(!!inputRef?.current.value);
    }, []);

    const handleChangeTypeInput = useCallback(() => {
        setInputType(!inputType);
    }, [inputType]);

    // const handleChange = useCallback((text: string) => {
    //     const value = maskPhone(text);
    //     inputMaskChange(value);
    // }, [inputMaskChange]);

  return (
    <Container
      isFocused={isFocused}
      inputForm={inputForm}
      textArea={textArea}
      shortInput={shortInput}
      bottomInput={bottomInput}
      selectInput={selectInput}
      inputTime={inputTime}
    >
      <TextInput
        onFocus={handleSetFocus}
        onBlur={handleSetBlur}
        secureTextEntry={bottomInput && inputType}
        // onChangeText={text => handleChange(text)}
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
