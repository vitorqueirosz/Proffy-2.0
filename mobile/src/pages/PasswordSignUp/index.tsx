import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import { useAuth } from '../../components/hooks/AuthContext';

interface Params {
    name: string;
    whatsapp: string;
};


const PasswordSignUp: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [whatsapp, setWhatsapp] = useState<number>();
  const { signUp } = useAuth();

  const route = useRoute();

  const routeParams = route.params as Params;



  const handleSubmit = useCallback(
      async () => {

        try {

            await signUp({
                name: routeParams.name,
                email,
                password,
                whatsapp: routeParams.whatsapp,
            });


        } catch {
            console.log('error');
        }



  }, [routeParams.name, routeParams.whatsapp, email, password, signUp]);

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
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <Input
              placeholder="Senha"
              value={password}
              onChangeText={value => setPassword(value)}
              bottomInput
              iconPassword
            />

            <NextButton onPress={handleSubmit}>
              <NextButtonText>Concluir cadastro</NextButtonText>
            </NextButton>
          </CreateContent>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default PasswordSignUp;
