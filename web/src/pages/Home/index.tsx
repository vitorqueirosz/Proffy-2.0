import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';

import { Link, useHistory } from 'react-router-dom';

import logout from '../../assets/images/logout.svg';

import { useAuth } from '../../hooks/AuthContext';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';
import userProfilePic from '../../assets/images/user2.svg';

import {
  Container,
  Header,
  Content,
  Bottom,
  MessageContent,
  ButtonContent,
  BottomContent,

} from './styles';
import api from '../../services/api';

interface UserData {
    name: string;
    avatar: string;
}

const Home: React.FC = () => {
  const { signOut } = useAuth();
  const [data, setData] = useState({} as UserData);

  const history = useHistory();

  useEffect(() => {
    api.get('/users').then((response) => {
      const { user } = response.data;

      setData(user);
    });
  }, []);

  const handleGoToProfile = useCallback(() => {
    history.push('/profile');
  }, [history]);

  const handleGoOut = useCallback(() => {
    signOut();
    history.push('/');
  }, [signOut, history]);

  return (
    <>
      <Container>

        <Header>
          <button type="button" onClick={handleGoToProfile}>
            <img
              src={!data.avatar ? (
                userProfilePic
              ) : (
                `http://localhost:3333/files/${data?.avatar}`
              )}
              alt="Imagem de perfil"
            />
            <span>{data.name}</span>
          </button>

          <aside>
            <button type="button" onClick={handleGoOut}>
              <img src={logout} alt="Sair" />
            </button>
          </aside>

        </Header>

        <Content>
          <div>
            <img src={logoImg} alt="logo" />
            <h2>
              Sua plataforma de
              {' '}
              <br />
              estudos online.
            </h2>
          </div>

          <img src={landingImg} alt="landing" />
        </Content>

      </Container>
      <Bottom>
        <BottomContent>
          <MessageContent>
            <p>
              Seja bem-vindo,
              <br />

              <strong>O que deseja fazer?</strong>
            </p>

            <span>
              Total de 200 conexoes
              {' '}
              <br />
              {' '}
              ja realizadas
              {' '}
              <img src={heartIcon} alt="" />
              {' '}
            </span>
          </MessageContent>

          <ButtonContent>
            <Link to="/search-classes" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>
            <Link to="/give-classes" className="giveClasses">
              <img src={giveClassesIcon} alt="Dar aulas" />
              Dar aulas
            </Link>

          </ButtonContent>
        </BottomContent>

      </Bottom>

    </>
  );
};
export default Home;
