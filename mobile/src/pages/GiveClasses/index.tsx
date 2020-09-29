import React, { useState, useCallback, useEffect } from 'react';

import { Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import camIcon from '../../assets/images/icons/camera.png';
import profilePicture from '../../assets/images/profilePic.jpg';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

import { useAuth } from '../../components/hooks/AuthContext';

import {
    Container,
    PickerItem,
    ContentTopTitle,
    GridInput,
    ProfilePicData,
    TopTitleName,
    Label,
    ProfileContent,
    TopTitle,
    ScheduleItem,
    Content,
    ClassesContent,
    HeaderScheduleContent,
    NewScheduleButton,
    NewScheduleTitle,
    ScheduleContent,
    ScheduleContentInput,
    InputContent,
    DeleteScheduleButton,
    DeleteScheduleTitle,
    Footer,
    SubmitButton,
    SubmitButtonText,
    HeaderProfileContent

 } from './styles';
import ModalSuccess from '../../components/ModalSuccess';

 interface ScheduleItem {
    subject: string;
    week_day: string;
    cost: number;
}

interface User {
    id: string;
    name: string;
    avatar: string;
    email: string;
    whatsapp: string;
    bio: string;
}

const GiveClasses: React.FC = () => {
    const { updateUserData, user } = useAuth();

    const [data, setData] = useState({} as User);
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isDone, setIsDone] = useState<boolean>(false);
    const [hideAvatar, setHideAvatar] = useState(false);
    const [scheduleItems, setScheduleItems] = useState([{
        week_day: 0, from: '', to: ''
    }]);

    useEffect(() => {
        api.get('/users').then(response => {
            const { user } = response.data;

            setData(user);
            setBio(user.bio);
        });

        // console.log(user);

    }, [bio]);

    const handleAddNewSchedule = useCallback(() => {

        setScheduleItems([ ...scheduleItems, { week_day: 0, from: '', to: ''}])

    }, [scheduleItems]);

    const handleDeleteSchedule = useCallback((index: number) => {
        const filteredScheduleItem = scheduleItems.filter((_, position) => position !== index);

        setScheduleItems(filteredScheduleItem);
    }, [scheduleItems]);

    const setScheduleItemValue = useCallback((index: number, field: string, value: string) => {
        const updatedScheduleItem = scheduleItems.map((scheduleItem, position) => {
            if (index === position) {
                return {...scheduleItem, [field]: value};
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItem);
    }, [scheduleItems]);

    const handleSubmit = useCallback( async () => {

        try {
            const classesData = {
                subject,
                schedule: scheduleItems,
                cost: Number(cost),
            };

            await api.post('/classes', classesData);

            setIsDone(true);
        } catch {
            console.log('error');
        }

    }, [subject, cost, scheduleItems]);


  return (
    <ScrollView>
      <Container>
        {isDone ? <ModalSuccess /> : (

          <>
            <PageHeader
              pageTitle="Dar aulas"
              title="Que incrível que você quer dar aulas."
              subTitle="O primeiro passo, é preencher esse formulário de inscrição."
            />

            <Content>
              <ProfileContent>
                <ContentTopTitle>
                  <TopTitle>Seus dados</TopTitle>
                </ContentTopTitle>

                <HeaderProfileContent>
                  {data.avatar ? (
                    <ProfilePicData
                      source={{ uri: `http://192.168.0.119:3333/files/${data.avatar}` }}
                    />
              )
              : (
                <ProfilePicData
                  source={profilePicture}
                />
            )}

                  <TopTitleName>{user.name}</TopTitleName>
                </HeaderProfileContent>

                <Label>Whatsapp</Label>
                <Input
                  placeholder="Whatsapp"
                  inputForm
                  value={user.whatsapp}
                />

                <Label>Biografia</Label>
                <Input
                  textArea
                  multiline
                  numberOfLines={2}
                  value={bio}
                  onChangeText={value => setBio(value)}
                />
              </ProfileContent>

              <ClassesContent>
                <ContentTopTitle>
                  <TopTitle>Sobre a aula</TopTitle>
                </ContentTopTitle>
                <Label>Materia</Label>
                <PickerItem

                  items={[
                    {value:"Artes", label: "Artes"},
                    {value:"Historia", label: "Historia"},
                    {value:"Matematica", label: "Matematica"},
                    {value:"Ingles", label: "Ingles"},
                    {value:"Portugues", label: "Portugues"},
                    {value:"Geografia", label: "Geografia"},
                    {value:"Biologia", label: "Biologia"},
                    {value:"Fisica", label: "Fisica"},
                    {value:"Quimica", label: "Quimica"},
                    {value:"Educacao Fisica", label: "Educacao Fisica"},
                ]}
                  placeholder="Materia"
                  onChangeItem={(value) => setSubject(value.value)}
                  defaultValue={subject}
                  containerStyle={{height: 64, marginBottom: 16}}
                />

                <Label>Custo da sua hora por aula</Label>
                <Input
                  placeholder="Custo da sua hora"
                  inputForm
                  value={cost}
                  onChangeText={value => setCost(value)}
                />
              </ClassesContent>

              <ScheduleContent>
                <HeaderScheduleContent>
                  <TopTitle>Horarios disponiveis</TopTitle>

                  <NewScheduleButton onPress={handleAddNewSchedule}>
                    <NewScheduleTitle>+ Novo</NewScheduleTitle>
                  </NewScheduleButton>
                </HeaderScheduleContent>
                {scheduleItems.map((schedule, index) => (
                  <ScheduleItem key={index}>
                    <Label>Dia da semana</Label>
                    <PickerItem

                      items={[
                        {value: 0, label: "Domingo"},
                        {value: 1, label: "Segunda-Feira"},
                        {value: 2, label: "Terca-Feira"},
                        {value: 3, label: "Quarta-Feira"},
                        {value: 4, label: "Quinta-Feira"},
                        {value: 5, label: "Sexta-Feira"},
                        {value: 6, label: "Sábado"},
                    ]}
                      placeholder="Dia da semana"
                      defaultValue={schedule.week_day}
                      containerStyle={{height: 64, marginBottom: 8}}
                      onChangeItem={(value) => setScheduleItemValue(index, 'week_day', value.value)}
                    />
                    <ScheduleContentInput>

                      <GridInput>
                        <InputContent>
                          <Label>Das</Label>
                          <Input
                            onChangeText={value => setScheduleItemValue(index, 'from', value)}
                            inputForm
                            inputTime
                            placeholder="Horario"
                          />
                        </InputContent>

                        <InputContent>
                          <Label>Ate</Label>
                          <Input
                            onChangeText={value => setScheduleItemValue(index, 'to', value)}
                            selectInput
                            shortInput
                            inputTime
                            placeholder="Horario"
                          />
                        </InputContent>
                      </GridInput>

                      <DeleteScheduleButton onPress={() => handleDeleteSchedule(index)}>
                        <DeleteScheduleTitle>Excluir horario</DeleteScheduleTitle>
                      </DeleteScheduleButton>
                    </ScheduleContentInput>


                  </ScheduleItem>
            ))}
              </ScheduleContent>

              <Footer>
                <SubmitButton onPress={handleSubmit}>
                  <SubmitButtonText>Salvar alterações</SubmitButtonText>
                </SubmitButton>
              </Footer>
            </Content>

          </>
         ) }

      </Container>

    </ScrollView>
  )
}

export default GiveClasses;
