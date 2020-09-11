import React, {
  useCallback, useState, FormEvent, ChangeEvent,
} from 'react';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import backIcon from '../../assets/images/icons/back.svg';

import { useAuth } from '../../hooks/AuthContext';

import ModalSuccess from '../../components/ModalSuccess';
// import api from '../../services/api';

import
{
  Wrapper,
  Container,
  Background,
  Content,

} from './styles';

interface SignUpFormData {
    name: string;
    email: string;
    whatsapp: number;
    password: string;
}

const SignUp: React.FC = () => {
  const { signUp } = useAuth();
  const history = useHistory();
  const [isDone, setIsDone] = useState<boolean>(false);

  const [formData, setFormData] = useState({} as SignUpFormData);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }, [formData]);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    const {
      name, email, whatsapp, password,
    } = formData;

    try {
      const data = {
        name, email, whatsapp, password,
      };

      await signUp({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        password: data.password,
      });

      // toast.success('Cadastro realizado com sucesso!', { autoClose: 1500 });

      setIsDone(true);
      history.push('/profile');
    } catch (error) {
      toast.error('Erro ao tentar realizar o cadastro.', { autoClose: 1500 });
    }
  }, [formData, history, signUp]);

  return (
    <Wrapper>

      <Container>

        {isDone && <ModalSuccess />}

        <a href="/">
          <img src={backIcon} alt="" />
        </a>
        <Content>

          <h1>Cadastro</h1>

          <span>
            Preencha os dados abaixo
            para começar.
          </span>

          <form onSubmit={handleSubmit}>

            <Input
              name="name"
              type="name"
              placeholder="Nome"
              classNameInput="borderInputTop"
              onChange={handleInputChange}

            />
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={handleInputChange}
            />
            <Input
              name="whatsapp"
              type="number"
              id="whatsapp"
              placeholder="Whatsapp"
              onChange={handleInputChange}
            />

            <Input
              name="password"
              type="password"
              classNameInput="borderInputBottom"
              placeholder="Senha"
              onChange={handleInputChange}
            />

            <button type="submit">Concluir cadastro</button>
          </form>
        </Content>

      </Container>

      <Background />

    </Wrapper>
  );
};

export default SignUp;
