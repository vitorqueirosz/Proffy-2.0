import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
          },
            tabStyle: {
                height: 64,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16

            },
            inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#EBEBF5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
        }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
              tabBarLabel: 'Proffys',
              tabBarIcon: ({ color, size, focused}) => {
                  return (
                    <Ionicons
                      name="ios-easel"
                      size={size}
                      color={focused ? '#8257e5' : color}
                    />
                  )
              }
          }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused}) => {
              return (
                <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
              )
          }
      }}
      />
    </Navigator>
  )
}

export default StudyTabs;
