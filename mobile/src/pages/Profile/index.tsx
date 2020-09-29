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
    Select,
    ContentTopTitle,
    GridInput,
    TopContent,
    ProfilePic,
    ProfilePicData,
    NameTitle,
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
    SelectButtonImage,
    ImageButtonSelect

 } from './styles';


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
const Profile: React.FC = () => {

    const { user } = useAuth();

    const [data, setData] = useState({} as User);
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('');
    const [hideAvatar, setHideAvatar] = useState(false);
    const [scheduleItems, setScheduleItems] = useState([{
        week_day: 0, from: '', to: ''
    }]);

    useEffect(() => {
        api.get('/users').then(response => {
            // const { user } = response.data;

            setData(response.data.user);
            setBio(user.bio);

            console.log(user.avatar);
        });


    }, [bio]);


    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!')
            }
        }
    };

    const handleSelectProfilePic = useCallback( async () => {

        await getPermissionAsync();


            const result = await ImagePicker.launchImageLibraryAsync();

            if (result.cancelled) {
                return;
            }

            if (!result.uri) {
              return;
          }


          setHideAvatar(true);
          setAvatar(result.uri);
    }, []);


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


        const classesData = {
            subject,
            schedule: scheduleItems,
            cost: Number(cost),
        };

        await api.post('/classes', classesData);

        const formData = new FormData();

        formData.append('bio', bio);

        const avatarData = {
            type: 'Image/jpeg',
            uri: avatar,
            name: `${user.id}.jpg`
        }

        formData.append('avatar', avatarData);

        await api.patch('/users/profile', formData);

        // await updateUserData({
        //     id: user.id,
        //     name: user.name,
        //     email: user.email,
        //     avatar,
        //     bio,
        //     whatsapp: data.whatsapp,
        // });



    }, [avatar, bio, subject, cost, scheduleItems, user.id]);


  return (
    <ScrollView>
      <Container>
        <PageHeader pageTitle="Meu perfil">

          <TopContent>
            {hideAvatar ? (
              <ProfilePic source={{ uri: avatar }} />
            )
                :
            (
              <ProfilePicData
                source={!data.avatar ? profilePicture :  { uri: `http://192.168.0.119:3333/files/${data.avatar}`}}
              />
            ) }

            <SelectButtonImage onPress={handleSelectProfilePic}>
              <ImageButtonSelect source={camIcon} />
            </SelectButtonImage>

            <NameTitle>{data.name}</NameTitle>
          </TopContent>

        </PageHeader>

        <Content>
          <ProfileContent>
            <ContentTopTitle>
              <TopTitle>Seus dados</TopTitle>
            </ContentTopTitle>

            <Label>Nome</Label>
            <Input
              placeholder="Nome"
              inputForm
              value={data.name}
            />

            <Label>E-mail</Label>
            <Input
              placeholder="E-mail"
              inputForm
              value={data.email}
            />

            <Label>Whatsapp</Label>
            <Input
              placeholder="Whatsapp"
              inputForm
              value={data.whatsapp}
            />

            <Label>Biografia</Label>
            <Input
              textArea
              multiline
              numberOfLines={6}
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
            {scheduleItems.map((schedule, index: number) => (
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
                        inputTime
                        shortInput
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
      </Container>

    </ScrollView>
  )
}

export default Profile;
