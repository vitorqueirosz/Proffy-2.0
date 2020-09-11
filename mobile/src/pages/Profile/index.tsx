import React, { useState, useCallback } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native';
import logoImg from '../../assets/images/landing.png';
import Input from '../../components/Input';



import {
    Container,
    Header,
    HeaderTitle,
    ContentTopTitle,
    GridInput,
    TopContent,
    ProfilePic,
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
    SubmitButtonText

 } from './styles';
import PageHeader from '../../components/PageHeader';

interface ScheduleItem {
    subject: string;
    week_day: string;
    cost: number;
}

const Profile: React.FC = () => {

    const [data, setData] = useState();
    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems] = useState([{
        week_day: 0, from: '', to: ''
    }]);


    const handleAddNewSchedule = useCallback(() => {

        setScheduleItems([ ...scheduleItems, { week_day: 0, from: '', to: ''}])

    }, [scheduleItems]);

    const handleDeleteSchedule = useCallback((index: number) => {
        const filteredScheduleItem = scheduleItems.filter((_, position) => position !== index);

        setScheduleItems(filteredScheduleItem);
    }, []);

  return (
    <ScrollView>
      <Container>
        {/* <Header>
                <Icon name="arrow-left" size={20} color="#D4C2FF"/>

                <HeaderTitle>Meu perfil</HeaderTitle>

                <Logo source={logoImg}/>
            </Header> */}
        <PageHeader pageTitle="Meu perfil">

          <TopContent>
            <ProfilePic source={logoImg} />

            <NameTitle>Vitor Queiroz</NameTitle>
          </TopContent>

        </PageHeader>

        <Content>
          <ProfileContent>
            <ContentTopTitle>
              <TopTitle>Seus dados</TopTitle>
            </ContentTopTitle>

            <Label>Nome</Label>
            <Input placeholder="Nome" inputForm />

            <Label>E-mail</Label>
            <Input placeholder="E-mail" inputForm />

            <Label>Whatsapp</Label>
            <Input placeholder="Whatsapp" inputForm />

            <Label>Biografia</Label>
            <Input textArea multiline numberOfLines={6} />
          </ProfileContent>

          <ClassesContent>
            <ContentTopTitle>
              <TopTitle>Sobre a aula</TopTitle>
            </ContentTopTitle>
            {/* <RNPickerSelect
                    onValueChange={(itemValue, itemIndex) =>
                        setSubject(itemValue)
                    }
                    items={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Historia', label: 'Historia'},
                        { value: 'Matematica', label: 'Matematica'},
                        { value: 'Ingles', label: 'Ingles'},
                        { value: 'Portugues', label: 'Portugues'},
                        { value: 'Geografia', label: 'Geografia'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Fisica', label: 'Fisica'},
                        { value: 'Quimica', label: 'Quimica'},
                        { value: 'Educacao Fisica', label: 'Educacao Fisica'}
                    ]}
                    >

                    <Input
                        placeholder="Qual a materia?"
                        value={subject}
                    />
                </RNPickerSelect> */}

            <Label>Custo da sua hora por aula</Label>
            <Input placeholder="Custo da sua hora" inputForm />
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
                {/* <RNPickerSelect
                onValueChange={(itemValue, itemIndex) =>
                    setWeekday(String(itemValue))
                }
                items={[
                    { value: '0', label: 'Domingo'},
                    { value: '1', label: 'Segunda-Feira'},
                    { value: '2', label: 'Terca-Feira'},
                    { value: '3', label: 'Quarta-Feira'},
                    { value: '4', label: 'Quinta-Feira'},
                    { value: '5', label: 'Sexta'},
                    { value: '6', label: 'Sabado'}
                ]}
                >

                <Input
                    placeholder="Qual o dia?"
                    value={week_day}
                />
            </RNPickerSelect> */}
                <ScheduleContentInput>

                  <GridInput>
                    <InputContent>
                      <Label>Das</Label>
                      <Input inputForm />
                    </InputContent>

                    <InputContent>
                      <Label>Ate</Label>
                      <Input inputForm shortInput />
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
            <SubmitButton>
              <SubmitButtonText>Salvar alterações</SubmitButtonText>
            </SubmitButton>
          </Footer>
        </Content>
      </Container>

    </ScrollView>
  )
}

export default Profile;
