import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';


import { Container, Label } from './styles';

const TeacherList: React.FC = () => {

    const [subject, setSubject] = useState('');

  return (
    <Container>
      <PageHeader pageTitle="Estudar" title="Proffys Disponiveis" filter>

        <Label>Materia</Label>
        <RNPickerSelect
          onValueChange={(itemValue, itemIndex) =>
                        setSubject(itemValue)}
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
        </RNPickerSelect>
      </PageHeader>


    </Container>
  )
}

export default TeacherList;
