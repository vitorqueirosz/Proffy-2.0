import React, {
  useState, useCallback, useEffect, ChangeEvent, FormEvent,
} from 'react';

import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import warnLogo from '../../assets/images/icons/warning.svg';

import Select from '../../components/Select';
import InputForm from '../../components/InputForm';

import api from '../../services/api';
import Dropzone from '../../components/Dropzone';
import userProfilePic from '../../assets/images/user2.svg';

import {
  Container,
  Header,
  Form,
  TopContentForm,
  SubjectTitle,
  Content,
  GridContent,
  ContentArea,
  ContentClass,
  ContentTime,
  ScheduleContent,
  ScheduleContentItem,
  Footer,
  ProfilePic,

} from './styles';

interface UserData {
    avatar?: string;
    name: string;
    email: string;
    whatsapp: string;
    bio: string;
}

interface UpdatedUserData {
    bio: string;
}

const Profile: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState({} as UserData);
  const [userName, setUserName] = useState<string>();
  const [newData, setNewData] = useState({} as UserData);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [subject, setSubject] = useState<string>();
  const [bioData, setBioData] = useState({} as UpdatedUserData);
  const [cost, setCost] = useState<string>();

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ]);

  useEffect(() => {
    api.get('/users').then((response) => {
      const { user } = response.data;

      setData(user);
      setUserName(user.name);
      setBioData({ bio: user.bio });
    });
  }, []);

  const handleAddNewClass = useCallback(() => {
    setScheduleItems([...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }, [scheduleItems]);

  const handleInputUpdate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewData({ ...newData, [name]: value });
  }, [newData]);

  const handleTextAreaChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setBioData({ ...bioData, [name]: value });
  }, [bioData]);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { bio } = bioData;

      const classData = {
        subject,
        schedule: scheduleItems,
        cost,
      };

      await api.post('/classes', classData);
      const formData = new FormData();

      formData.append('bio', bio);

      if (selectedFile) {
        formData.append('avatar', selectedFile);
      }

      await api.patch('/users/profile', formData);

      history.push('/search-classes');
    } catch (error) {
      toast.error('Erro ao criar nova classe, tente novamente', { autoClose: 1500 });
    }
  }, [cost, scheduleItems, subject, bioData, selectedFile, history, data.avatar]);

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

  return (
    <Container>
      <Header>

        <header>
          <Link to="/home">
            <img src={backIcon} alt="Voltar" />
          </Link>

          <span>Meu perfil</span>

          <img src={logoImg} alt="Logo" />
        </header>

        <div>
          <ProfilePic>

            <img
              src={
                  !data.avatar ? (
                    userProfilePic
                  ) : (
                    `http://localhost:3333/files/${data?.avatar}`
                  )
}
              alt="Imagem de perfil"
            />

            <Dropzone
              onFileUploaded={setSelectedFile}
              isVisibleSelectedFile={!!selectedFile}
              isVisibleAvatarData={!!data.avatar}
            />
          </ProfilePic>

          <span>{data.name}</span>
        </div>

      </Header>

      <Content>
        <Form onSubmit={handleSubmit}>

          <TopContentForm>
            <h1>Seus dados</h1>

            <InputForm
              name="name"
              label="Nome"
              placeholder="Digite seu nome"
              value={userName}
              onChange={(e) => { setUserName(e.target.value); }}
            />
          </TopContentForm>

          <GridContent>
            <InputForm
              name="email"
              type="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={data.email}
              onChange={handleInputUpdate}
            />

            <InputForm
              name="whatsapp"
              label="Whatsapp"
              placeholder="Digite seu whatsapp"
              value={data.whatsapp}
              onChange={handleInputUpdate}
            />
          </GridContent>

          <ContentArea>
            <label htmlFor="bio">Biografia</label>
            <textarea
              name="bio"
              placeholder="Digite sua biografia"
              onChange={handleTextAreaChange}
              value={bioData.bio}
            />
          </ContentArea>

          <SubjectTitle>
            <h1>Sobre a aula</h1>
          </SubjectTitle>

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
              placeholder="Digite um valor R$"
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

export default Profile;
