import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import iconProfile from '../../assets/images/icons/heart.png';

import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';

import homeImage from '../../assets/images/landing.png';


import {
    Container,
    TopContent,
    Header,
    ProfileContent,
    ProfilePic,
    NameText,
    LogoutButton,
    BackgroundImage,
    BottomContent,
    Title,
    TitleBold,
    OptionsContent,
    StudyOption,
    StudyImage,
    StudyTitle,
    GiveClassesOption,
    GiveClassesImage,
    GiveClassesTitle,
    ConectionsTitle

 } from './styles';

const Home: React.FC = () => {

 const navigation = useNavigation();

  return (
    <Container>
      <TopContent>
        <Header>
          <ProfileContent onPress={() => navigation.navigate('Profile')}>
            <ProfilePic source={iconProfile} />
            <NameText>Vitor Queiroz</NameText>
          </ProfileContent>

          <LogoutButton>
            <Icon name="power" size={20} color="#D4C2FF" />
          </LogoutButton>
        </Header>

        <BackgroundImage source={homeImage} />
      </TopContent>


      <BottomContent>

        <Title>
          Seja bem-vindo,
          {' '}
          {'\n'}
          <TitleBold>O Que deseja fazer?</TitleBold>
        </Title>

        <OptionsContent>
          <StudyOption onPress={() => navigation.navigate('study')}>
            <StudyImage source={studyIcon} />

            <StudyTitle>Estudar</StudyTitle>
          </StudyOption>

          <GiveClassesOption onPress={() => navigation.navigate('GiveClasses')}>
            <GiveClassesImage source={giveClassesIcon} />

            <GiveClassesTitle>Dar aulas</GiveClassesTitle>
          </GiveClassesOption>

        </OptionsContent>


        <ConectionsTitle>
          Total de 300 conexoes ja realizadas.
          <Icon name="heart" color="#8257E5" size={20} />
        </ConectionsTitle>
      </BottomContent>



    </Container>
  )
}

export default Home;
