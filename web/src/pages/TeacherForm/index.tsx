import React, {
  useState, useCallback, useEffect, FormEvent,
} from 'react';

import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import rocket from '../../assets/images/icons/rocket2.svg';
import warnLogo from '../../assets/images/icons/warning.svg';

import userProfilePic from '../../assets/images/user2.svg';

import Select from '../../components/Select';
import InputForm from '../../components/InputForm';
import PageHeader from '../../components/PageHeader';

import {
  Container,
  Header,
  ProfileContent,
  Form,
  Content,
  GridContent,
  ContentArea,
  ContentClass,
  ContentTime,
  ScheduleContent,
  ScheduleContentItem,
  Footer,
} from './styles';
import api from '../../services/api';

interface UserData {
    avatar?: string;
    name: string;
    email: string;
    whatsapp: string;
    bio: string;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState({} as UserData);
  const [subject, setSubject] = useState<string>();
  const [cost, setCost] = useState<string>();
  const [done, setDone] = useState<boolean>(false);

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ]);

  const handleAddNewClass = useCallback(() => {
    setScheduleItems([...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }, [scheduleItems]);

  const setScheduleItemValue = useCallback((position: number, field: string, value: string) => {
    const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItem);
  }, [scheduleItems]);

  const handleRemoveClass = useCallback((position: number) => {
    const filteredScheduleItem = scheduleItems.filter((_, index) => position !== index);

    setScheduleItems(filteredScheduleItem);
  }, [scheduleItems]);

  useEffect(() => {
    api.get('/users').then((response) => {
      const { user } = response.data;

      setData(user);
    });
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        await api.post('/classes', {
          subject,
          cost,
          schedule: scheduleItems,
        });

        setDone(true);

        toast.success('Classe criada com sucesso!');
        history.push('/home');
      } catch (error) {
        toast.error('Erro ao criar uma classe');

        setDone(false);
      }
    }, [cost, scheduleItems, subject, history],
  );

  return (
    <Container>

      <Header>
        <PageHeader
          content="Dar aulas"
          description="O primeiro passo, é preencher esse
        formulário de inscrição."
          title="Que incrível que você
        quer dar aulas."
        //   subDescription="Preparare-se!
        // vai ser o máximo."
        />

      </Header>

      <Content>
        <Form onSubmit={handleSubmit}>

          <h1>Seus dados</h1>

          <GridContent>
            <ProfileContent>
              <img
                src={data.avatar === null ? (
                  userProfilePic
                ) : (
                  `http://localhost:3333/files/${data?.avatar}`
                )}
                alt="Imagem de perfil"
              />
              <strong>{data.name}</strong>

            </ProfileContent>

            <InputForm
              name="whatsapp"
              label="Whatsapp"
              placeholder="Digite seu whatsapp"
              value={data.whatsapp}
            />

          </GridContent>

          <ContentArea>
            <label htmlFor="bio">Biografia</label>
            <textarea
              name="bio"
              placeholder="Biografia"
              value={data.bio}
            />
          </ContentArea>

          <h1>Sobre a aula</h1>

          <ContentClass>
            <Select
              name="subject"
              label="Materia"
              value={subject}
              onChange={(e) => { setSubject(e.target.value); }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Historia', label: 'Historia' },
                { value: 'Matematica', label: 'Matematica' },
                { value: 'Ingles', label: 'Ingles' },
                { value: 'Portugues', label: 'Portugues' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Fisica', label: 'Fisica' },
                { value: 'Quimica', label: 'Quimica' },
                { value: 'Educacao Fisica', label: 'Educacao Fisica' },
              ]}
            />
            <InputForm
              name="cost"
              label="Custo da sua hora por aula"
              placeholder="Digite seu nome"
              onChange={(e) => { setCost(e.target.value); }}
            />
          </ContentClass>

          <ContentTime>
            <header>
              <h1>Horarios disponiveis</h1>

              <button type="button" onClick={handleAddNewClass}>+ Novo horario</button>
            </header>

            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleContent>
                <ScheduleContentItem key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-Feira' },
                      { value: '2', label: 'Terca-Feira' },
                      { value: '3', label: 'Quarta-Feira' },
                      { value: '4', label: 'Quinta-Feira' },
                      { value: '5', label: 'Sexta' },
                      { value: '6', label: 'Sabado' },
                    ]}
                  />

                  <InputForm name="from" label="Das" type="time" value={scheduleItem.from} onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)} />
                  <InputForm name="to" label="Ate" type="time" value={scheduleItem.to} onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)} />
                </ScheduleContentItem>
                <footer>
                  <button type="button" onClick={() => handleRemoveClass(index)}>Excluir horario</button>
                </footer>

              </ScheduleContent>
            ))}

          </ContentTime>

          <Footer>
            <div>
              <img src={warnLogo} alt="Logo cuidado" />

              <aside>
                <span>Importante!</span>
                <p>Preencha todos os dados corretamente.</p>
              </aside>
            </div>

            <button type="submit">Salvar cadastro</button>
          </Footer>

        </Form>
      </Content>
    </Container>
  );
};

export default TeacherForm;
