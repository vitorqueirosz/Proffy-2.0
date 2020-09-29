import { useNavigation } from '@react-navigation/native';
import React from 'react';

import doneBackground from '../../assets/images/done.png';
import registerDone from '../../assets/images/registerDone.png';

import { Container, Content, ImageBackground, Title,ImageDone, SubTitle, ReturnButton,ReturnButtonText } from './styles';


const ModalSuccess: React.FC = () => {

    const navigation = useNavigation();

  return (
    <Container>
      <ImageBackground source={doneBackground} />

      <Content>
        <ImageDone source={registerDone} resizeMode="center" />

        <Title>
          Cadastro
          {' '}
          {'\n'}
          salvo!
        </Title>

        <SubTitle>
          Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.
        </SubTitle>
        <ReturnButton onPress={() => navigation.navigate('Home')}>
          <ReturnButtonText>Voltar</ReturnButtonText>
        </ReturnButton>
      </Content>

    </Container>
  )
}

export default ModalSuccess;
