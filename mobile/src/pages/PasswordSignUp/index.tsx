import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';

import {
  Container,
  Header,
  InfoContent,
  Title,
  SubTitle,
  CreateContent,
  TopTitle,
  NextButton,
  NextButtonText,
} from './styles';

const PasswordSignUp: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>();

  return (

    <>
      <Header>
        <Icon onPress={() => navigation.goBack()} name="arrow-left" size={25} color="#9a9a9a" />
      </Header>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        enabled
      >

        <Container>
          <InfoContent>
            <Title>Preencha seus dados</Title>
            <SubTitle>Basta preencher esses dados e voce estara conosco.</SubTitle>
          </InfoContent>

          <CreateContent>
            <TopTitle>
              02.  Email e Senha
            </TopTitle>

            <Input
              placeholder="E-mail"
              value={name}
            />
            <Input
              placeholder="Senha"
              value={name}
              bottomInput
              iconPassword
            />

            <NextButton onPress={() => navigation.navigate('Home')}>
              <NextButtonText>Concluir cadastro</NextButtonText>
            </NextButton>
          </CreateContent>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default PasswordSignUp;
