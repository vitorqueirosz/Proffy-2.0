import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import profilePicture from '../../assets/images/profilePic.jpg';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whastsAppIcon from '../../assets/images/icons/whatsapp.png';


import api from '../../services/api';

import scheduleArrow from '../../assets/images/seta.png';


import {
    Container,
    Content,
    Header,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    ProfileSubject,
    ProfileBio,
    ScheduleContent,
    Footer,
    TopTitles,
    PriceText,
    PriceValueText,
    ButtonsContainer,
    ButtonFavorited,
    UnfavoritedButton,
    ButtonFavoriteImage,
    ButtonContactImage,
    ButtonContactText,
    ButtonContact,
    TopLabels,
    LabelDay,
    LabelTime,
    ScheduleDay,
    ScheduleDayText,
    ScheduleArrowImage,
    ScheduleTime,
    ScheduleTimeText } from './styles';
import { useAuth } from '../hooks/AuthContext';

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    from: string;
    to: string;
    week_day: string;
    bio: string;
    cost: number;
    whatsapp: string;
    subject: string;
    user: {
        name: string;
        email: string;
        bio: string;
        avatar: string;
    }
    class: {
      cost: number;
      subject: string;
    }
}

interface TeacherProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher, favorited }) => {


    const { handleToggleFavorites, isFavorited } = useAuth();

    const handle = useCallback(() => {
        const teacherData = {
            teacher,
            favorited
        }
        handleToggleFavorites(teacherData);
    }, [handleToggleFavorites, favorited, teacher]);


    const handleLinkinToWhatsapp = useCallback(() => {
        api.post('/connections', {
            user_id: teacher.id
        });

        Linking.openURL(`whatsapp://send?phone=55${teacher.whatsapp}`)
    }, [teacher.id,
     teacher.whatsapp]);

  return (
    <Container>

      <Content>
        <Header>
          <ProfileImage source={profilePicture ||{ uri: `http://192.168.0.119:3333/files/${teacher.user.avatar}` }} />

          <ProfileInfo>
            <ProfileName>{teacher.user.name}</ProfileName>
            <ProfileSubject>Biologia</ProfileSubject>
          </ProfileInfo>
        </Header>

        <ProfileBio>{teacher.user.bio}</ProfileBio>

        <ScheduleContent>
          <TopLabels>
            <LabelDay>Dia</LabelDay>

            <LabelTime>Horario</LabelTime>
          </TopLabels>

          <ScheduleDay>
            <ScheduleDayText>{teacher.week_day}</ScheduleDayText>

            <ScheduleArrowImage source={scheduleArrow} />

            <ScheduleTime>
              <ScheduleTimeText>
                {teacher.from}

                -

                {teacher.to}
              </ScheduleTimeText>

            </ScheduleTime>
          </ScheduleDay>


        </ScheduleContent>

        <Footer>
          <TopTitles>
            <PriceText>
              Preco/hora
            </PriceText>
            <PriceValueText>
              R$
              {' '}
              {teacher.class.cost}
            </PriceValueText>
          </TopTitles>

          <ButtonsContainer>
            {isFavorited ? (
              <UnfavoritedButton onPress={handle}>
                <ButtonFavoriteImage source={unfavoriteIcon} />
              </UnfavoritedButton>
            ): (
              <ButtonFavorited onPress={handle}>
                <ButtonFavoriteImage source={heartOutlineIcon} />
              </ButtonFavorited>
            )}

            <ButtonContact onPress={handleLinkinToWhatsapp}>
              <ButtonContactImage source={whastsAppIcon} />
              <ButtonContactText>Entrar em contato</ButtonContactText>
            </ButtonContact>
          </ButtonsContainer>
        </Footer>
      </Content>

    </Container>
  )
}

export default TeacherItem;
