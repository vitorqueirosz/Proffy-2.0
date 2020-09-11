import React, { useCallback, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import InputForm from '../../components/InputForm';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import {
  Container,
  TeacherNotSearched,
  TeacherNotFound,
  Content,
} from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState<string>();
  const [week_day, setWeekDay] = useState<string>();
  const [time, setTime] = useState<string>();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const handleSearchTeachers = useCallback(async () => {
    api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      },
    }).then((response) => {
      const findTeacher = response.data.find((teacher: Teacher) => teacher.id);

      if (!findTeacher) {
        setIsEmpty(true);
      }

      setTeachers(response.data);
      setIsEmpty(false);
    });
  }, [subject, week_day, time]);

  return (
    <Container>

      <PageHeader
        content="Estudar"
        title="Estes são os
      proffys disponíveis."
        // subDescription="Preparare-se!
        // vai ser o máximo."
      >
        <form onSubmit={handleSearchTeachers}>

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

          <Select
            name="week_day"
            label="Dia da semana"
        //   value={scheduleItem.week_day}
        //   onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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

          <InputForm
            label="Horario"
            name="time"
            placeholder="Selecione um horario"
          />

          {/* <button type="submit">
            <img src={} alt=""/>
          </button> */}

        </form>
      </PageHeader>

      {/* {
      isEmpty ? (
        <TeacherNotFound>
          <span>
            Professor nao encontrado, tente novamente
          </span>
        </TeacherNotFound>
      )

        : (
          teachers.length === 0 ? (

            <TeacherNotSearched>
              <span>Pesquise um professor.</span>
            </TeacherNotSearched>
          )

            : (
              teachers.map((teacher: Teacher) => <TeacherItem teacher={teacher} key={teacher.id} />)
            )
        )

      } */}
      <Content>
        <TeacherItem />

        <TeacherItem />

        <TeacherItem />
      </Content>

    </Container>
  );
};

export default TeacherList;
