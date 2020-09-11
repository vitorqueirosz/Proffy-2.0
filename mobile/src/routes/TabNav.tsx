import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';


const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
      <Navigator
        tabBarOptions={{
            tabStyle: {
                height: 64,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }}
      
      >
          <Screen name="TeacherList" component={TeacherList}
          options={{
              tabBarLabel: 'Proffys'
          }}
          />
          <Screen name="Favorites" component={Favorites}/>
      </Navigator>
  )
}

export default StudyTabs;