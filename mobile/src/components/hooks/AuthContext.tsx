import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}

interface signUpCredentials {
    email: string;
    password: string;
    whatsapp: number;
}

interface User {
    email: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    signUp(credentials: signUpCredentials): Promise<void>;
}
interface AuthData {
    user: User;
    token: string;
}
const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState({} as AuthData);

    useEffect(() => {

        (
            async function loadAuthData() {
               const [token, user] = await AsyncStorage.multiGet([
                '@Proffy:token',
                '@Proffy:user'
               ]);

               if (token[1] && user[1]) {
                   setData({ token: token[1], user: JSON.parse(user[1])})
               }
            }
        )();
    }, []);


    const signIn = useCallback( async ({ email, password }) => {
        const response = await api.post('/sessions', {
            email,
            password
        });

        const { user, token } = response.data;

        await AsyncStorage.multiSet([
            ['@Proffy:token', token],
            ['@Proffy:user', JSON.stringify(user)]
        ]);

        setData({ user, token });
    }, []);

    const signOut = useCallback(() => {
          AsyncStorage.multiRemove([
              '@Proffy:token',
              '@Proffy:user'
          ])
    }, []);

    const signUp = useCallback( async ({ email, password, whatsapp }) => {

        const response = await api.post('/users', {
            email,
            password,
            whatsapp
        });

        const { user } = response.data;

        setData(user);


    }, []);


  return (
      <AuthContext.Provider value={{ signIn, signUp, user: data.user, signOut }}>
          {children}
      </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;
}

export  { AuthProvider, useAuth};
