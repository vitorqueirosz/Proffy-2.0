import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/images/logo.png';

import {
  Container, Header, PageTitle,Content, Title, SearchTeachers, Logo, ButtonSearchTeachers, SeachTeachersTitle, SearchContent
} from './styles';

interface PageHeaderProps {
    pageTitle: string;
    title?: string;
    filter?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle, title, filter, children,
}) => {

    const navigation = useNavigation();

    return (
      <Container>
        <Header>
          <Icon onPress={() => navigation.goBack()} name="arrow-left" size={20} color="#D4C2FF" />

          <PageTitle>{pageTitle}</PageTitle>

          <Logo source={logoImg} />
        </Header>


        {title && (
          <Content>

            <Title>{title}</Title>



            {filter && (
            <SearchTeachers>
              <ButtonSearchTeachers>
                <SearchContent>
                  <Icon name="filter" size={25} color="#04D361" />

                  <SeachTeachersTitle>Filtrar por dia, hora e materia</SeachTeachersTitle>
                </SearchContent>
                <Icon name="chevron-down" size={25} color="#A380F6" />
              </ButtonSearchTeachers>
            </SearchTeachers>
            )}
          </Content>
    )}


        {children}

      </Container>
    )
};

export default PageHeader;
