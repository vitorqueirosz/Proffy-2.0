import React, {
  useCallback, useState, ChangeEvent, useContext, FormEvent,
} from 'react';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

import { useAuth } from '../../hooks/AuthContext';

import
{
  Wrapper,
  Container,
  Background,
  Content,
  ContentLinks,
  Bottom,
} from './styles';
import api from '../../services/api';

interface SignInData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const history = useHistory();
  const [formData, SetFormData] = useState({} as SignInData);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    SetFormData({ ...formData, [name]: value });
  }, [formData]);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event?.preventDefault();

    const { email, password } = formData;

    const data = {
      email,
      password,
    };

    try {
      await api.post('/sessions', data);

      await signIn({
        email, password,
      });

      history.push('/profile');
    } catch (error) {
      toast.error('E-mail ou senha invalidos.', { autoClose: 1500 });
    }
  }, [formData, signIn, history]);

  return (
    <Wrapper>

      <Background />
      <Container>

        <Content>

          <h1>Fazer login</h1>
          <form onSubmit={handleSubmit}>

            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={handleInputChange}
              classNameInput="borderInputTop"
            />
            <Input
              classNameInput="borderInputBottom"
              name="password"
              placeholder="Senha"
              onChange={handleInputChange}
              showPassword
            />

            <ContentLinks>
              <div>
                <input name="checked" type="checkbox" />
                <span>Lembrar-me</span>
              </div>

              <a href="/forgot-password">Esqueci minha senha</a>
            </ContentLinks>

            <aside>
              <button type="submit">Entrar</button>
            </aside>
          </form>
        </Content>

        <Bottom>
          <div>
            <span>Nao tem contato?</span>
            <a href="/register">Cadastre-se</a>
          </div>

          <span>
            E de graca
            {' '}
            <img src={heartIcon} alt="" />
          </span>
        </Bottom>

      </Container>

    </Wrapper>
  );
};

export default SignIn;
