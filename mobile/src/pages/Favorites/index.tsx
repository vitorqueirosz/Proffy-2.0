import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { Container, ScrollView  } from './styles';

const Favorites: React.FC = () => {

    const [favorites, setFavorites] = useState([]);


    const loadFavorites = useCallback(() => {

        AsyncStorage.getItem('favorites').then(response => {
            if (response) {

                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        })

    }, []);

    useFocusEffect(useCallback(() => {
        loadFavorites();
    }, [loadFavorites])
    );

  return (
    <Container>
      <PageHeader title="Meus proffys Favoritos" pageTitle="Favoritos" />



      <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
        }}
      >
        {
            favorites.map((teacher: Teacher) => (
              <TeacherItem
                key={teacher.id}
                teacher={teacher}
                favorited
              />
                ))
            }
      </ScrollView>

    </Container>
  )
}

export default Favorites;
