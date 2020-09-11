import React from 'react';

import { Link } from 'react-router-dom';
import iconDone from '../../assets/images/icons/icon-done.svg';

import backgroundDone from '../../assets/images/done.png';

import { Container, ModalContent } from './styles';

const ModalSuccess: React.FC = () => (
  <Container>

    <ModalContent>
      <img src={iconDone} alt="Feito" />

      <h1>Cadastro salvo!</h1>

      <span>
        Tudo certo, seu cadastro está na nossa lista de professores.
        Agora é só ficar de olho no seu WhatsApp.
      </span>

      <Link to="/">Acessar</Link>
    </ModalContent>

  </Container>
);

export default ModalSuccess;
