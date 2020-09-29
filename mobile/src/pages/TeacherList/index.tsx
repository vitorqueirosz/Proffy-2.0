import React, { useCallback, useEffect, useState } from 'react';
import { sub } from 'react-native-reanimated';


import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../components/hooks/AuthContext';


import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import {
    Container,
    Label,
    PickerItem,
    Select,
    SearchContent,
    SeLectGridContent,
    SearchContentGrid,
    ScrollView,
    EmptyTeacherList,
    EmptyText } from './styles';

const TeacherList: React.FC = () => {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [favorites, setFavorites] = useState<number[]>([]);
    const [empty, setEmpty] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const { isVisible, handleVisibleFilter } = useAuth();


    const handleSubmit = useCallback( async () => {

        try {

           if ((week_day && subject) !== '' && time.length === 5) {
            await api.get('/classes', {
                params: {
                    week_day,
                    subject,
                    time,
                }
            }).then(response => {

                const findTeacher = response.data.schedules.find((teacher: Teacher) => teacher.id);

                const { schedules } = response.data;

                if (!findTeacher) {
                    return setEmpty(true);
                 }


                setTeachers(schedules);
                handleVisibleFilter();
            })
           }

        } catch {
            console.log('error');
        }
    }, [subject, time, week_day]);

    useEffect(() => {
        handleSubmit();
    }, [handleSubmit]);



  return (
    <Container>
      <PageHeader pageTitle="Estudar" title="Proffys Disponiveis" filter>

        {isVisible && (
        <SearchContent>
          <Label>Materia</Label>
          <PickerItem
            style={{ borderRadius: 8}}
            selectedValue={subject}
            onValueChange={(value: string) => setSubject(value)}
          >
            <Select label="Selecione" value="Selecione" />
            <Select label="Artes" value="Artes" />
            <Select label="Historia" value="Historia" />
            <Select label="Matematica" value="Matematica" />
            <Select label="Ingles" value="Ingles" />
            <Select label="Portugues" value="Portugues" />
            <Select label="Geografia" value="Geografia" />
            <Select label="Biologia" value="Biologia" />
            <Select label="Fisica" value="Fisica" />
            <Select label="Quimica" value="Quimica" />
            <Select label="Educacao Fisica" value="Educacao Fisica" />

          </PickerItem>

          <SearchContentGrid>

            <SeLectGridContent>
              <Label>Dia da semana</Label>
              <PickerItem
                selectedValue={week_day}
                onValueChange={(value: string) => setWeekDay(value)}
              >
                <Select label="Selecione" value="Selecione" />
                <Select label="Domingo" value="0" />
                <Select label="Segunda-Feira" value="1" />
                <Select label="Terca-Feira" value="2" />
                <Select label="Quarta-Feira" value="3" />
                <Select label="Quinta-Feira" value="4" />
                <Select label="Sexta-Feira" value="5" />
                <Select label="Sabado" value="6" />
              </PickerItem>
            </SeLectGridContent>

            <SeLectGridContent>
              <Label>Horario</Label>
              <Input
                placeholder="Horario"
                value={time}
                onChangeText={text => setTime(text)}
                selectInput
              />
            </SeLectGridContent>
          </SearchContentGrid>
        </SearchContent>
        )}
      </PageHeader>




      {empty ? (
        <EmptyTeacherList>
          <EmptyText>Proffy não encontrado, tente novamente</EmptyText>
          <Feather name="slash" size={20} color="#E33D3D" />
        </EmptyTeacherList>
      )


                :


        teachers.length === 0 ? (

          <EmptyTeacherList>
            <EmptyText>Nenhum Proffy filtrado</EmptyText>
            <Feather name="filter" size={20} color="#04D361" />
          </EmptyTeacherList>
            )

        : (

          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}
          >

            {teachers.map((teacher: Teacher) => {
                return (
                  <TeacherItem
                    key={teacher.id}
                    teacher={teacher}
                    favorited={favorites.includes(teacher.id)}
                  />
                )
            })}
          </ScrollView>
        )}




    </Container>
  )
}

export default TeacherList;
