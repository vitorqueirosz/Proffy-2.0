import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useAuth } from '../../components/hooks/AuthContext';


import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';


import { Container, Label, PickerItem, Select, SearchContent, SeLectGridContent, SearchContentGrid } from './styles';

const TeacherList: React.FC = () => {

    const [subject, setSubject] = useState('');
    // const [isVisible, SetIsVisibile] = useState<boolean>(false);
    const { isVisible } = useAuth();



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
            </SeLectGridContent>

            <SeLectGridContent>
              <Label>Horario</Label>
              <Input placeholder="Horario" selectInput />
            </SeLectGridContent>
          </SearchContentGrid>
        </SearchContent>
        )}
      </PageHeader>


    </Container>
  )
}

export default TeacherList;
