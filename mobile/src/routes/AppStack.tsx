import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PasswordSignUp from '../pages/PasswordSignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './TabNav';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
      <NavigationContainer>
          <Navigator screenOptions={{
              headerShown: false
          }}>
              <Screen name="SignIn" component={SignIn}/>
              <Screen name="SignUp" component={SignUp}/>
              <Screen name="PasswordSignUp" component={PasswordSignUp}/>
              <Screen name="Home" component={Home}/>
              <Screen name="Profile" component={Profile}/>
              <Screen name="GiveClasses" component={GiveClasses}/>
              <Screen name="study" component={StudyTabs}/>
          </Navigator>
      </NavigationContainer>

  )
}

export default Routes;
