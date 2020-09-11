import React, { useCallback } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import userProfilePic from '../../assets/images/user2.svg';

import {
  Container, Content, GridCardContent, Footer,
} from './styles';

export interface Teacher {
    id: string;
    avatar: string;
    name: string;
    bio: string;
    schedule: string;
    subject: string;
    whatsapp: number;
    cost: number;
}

interface TeacherItemProps {
    teacher?: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = useCallback(async () => {
    await api.post('/connections', {
      user_id: teacher?.id,
    });
  }, [teacher?.id]);

  return (
    <Container>
      {/* <header>
        <img src={teacher.avatar} alt="Foto" />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <Content>
        <p>{teacher.bio}</p>

        <div>
          <p>SCROLLVIEW</p>
        </div>
      </Content>

      <Footer>
        <p>
          Preco/hora
          <strong>{teacher.cost}</strong>
        </p>

        <a
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          type="button"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp Icon" />
          Entrar em contato
        </a>
      </Footer> */}

      <header>
        <img src={userProfilePic} alt="Foto" />

        <div>
          <strong>Tie zook</strong>
          <span>Biologia</span>
        </div>
      </header>

      <Content>
        <p>Apaixonado por genetica.</p>

        <GridCardContent>
          <ul>
            <li>
              <div>
                <span>Dia</span>
                <strong>Segunda</strong>
              </div>

              <aside>
                <span>Horario</span>
                <strong>11h - 17h</strong>
              </aside>

            </li>

            <li>
              <div>
                <span>Dia</span>
                <strong>Segunda</strong>
              </div>

              <aside>
                <span>Horario</span>
                <strong>11h - 17h</strong>
              </aside>

            </li>

            <li>
              <div>
                <span>Dia</span>
                <strong>Segunda</strong>
              </div>

              <aside>
                <span>Horario</span>
                <strong>11h - 17h</strong>
              </aside>

            </li>

            <li>
              <div>
                <span>Dia</span>
                <strong>Segunda</strong>
              </div>

              <aside>
                <span>Horario</span>
                <strong>11h - 17h</strong>
              </aside>

            </li>

            <li>
              <div>
                <span>Dia</span>
                <strong>Segunda</strong>
              </div>

              <aside>
                <span>Horario</span>
                <strong>11h - 17h</strong>
              </aside>

            </li>

            <li>
              <div>
                <span>Dia</span>
                <strong>Segunda</strong>
              </div>

              <aside>
                <span>Horario</span>
                <strong>11h - 17h</strong>
              </aside>

            </li>

            <li>
              <div>
                <span>Dia</span>
                <strong>Segunda</strong>
              </div>

              <aside>
                <span>Horario</span>
                <strong>11h - 17h</strong>
              </aside>

            </li>
          </ul>
        </GridCardContent>
      </Content>

      <Footer>
        <p>
          Preco/hora
          <strong>R$120,00</strong>
        </p>

        <a
          target="_blank"
          href={`https://wa.me/${teacher?.whatsapp}`}
          type="button"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp Icon" />
          Entrar em contato
        </a>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
