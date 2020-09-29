import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import  { Teacher } from "../TeacherItem";


import api from '../../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}

interface signUpCredentials {
    name: string;
    email: string;
    password: string;
    whatsapp: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

interface TeacherData {
    teacher: Teacher;
    favorited: boolean;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    signUp(credentials: signUpCredentials): Promise<void>;
    handleVisibleFilter(): void;
    handleToggleFavorites(teacherData: TeacherData): Promise<void>;
    updateUserData(user: User): Promise<void>;
    isVisible: boolean;
    isFavorited: boolean;
}
interface AuthData {
    user: User;
    token: string;
}
const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState({} as AuthData);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isFavorited, setIsFavorited] = useState<boolean>(false);

    useEffect(() => {

        (
            async function loadAuthData(): Promise<void> {
               const [token, user] = await AsyncStorage.multiGet([
                '@Proffy:token',
                '@Proffy:user'
               ]);

               if (token[1] && user[1]) {
                   api.defaults.headers.authorization = `Bearer ${token}`;

                   setData({ token: token[1], user: JSON.parse(user[1]) })
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

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ user, token });
    }, []);

    const updateUserData = useCallback( async (user: User) => {
        await AsyncStorage.setItem('@Proffy:user', JSON.stringify(user));

        setData({
            token: data.token,
            user
        });

    }, [data.token]);

    const signOut = useCallback(async () => {
          await AsyncStorage.multiRemove([
              '@Proffy:token',
              '@Proffy:user'
          ]);

          setData({} as AuthData);
    }, []);

    const signUp = useCallback( async ({ name, email, password, whatsapp }) => {

        const response = await api.post('/users', {
            name,
            email,
            password,
            whatsapp
        });

        const { user } = response.data;

        setData(user);
    }, []);

    const handleVisibleFilter = useCallback(() => {
        setIsVisible(!isVisible);
    }, [isVisible]);

    const handleToggleFavorites = useCallback( async ({ teacher, favorited }) => {

        const favorites = await AsyncStorage.getItem('favorites');

        if (favorited) {
            setIsFavorited(true);
        }

        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            const favoritedIndex = favoritesArray.findIndex((item: Teacher) => item.id === teacher.id);
            favoritesArray.splice(favoritedIndex, 1);

            setIsFavorited(false);
        }
        else {
            favoritesArray.push(teacher);
            setIsFavorited(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
     }, [isFavorited]);


  return (
    <AuthContext.Provider value={{
         signIn,
         signUp,
         user: data.user,
         signOut,
         handleVisibleFilter,
         handleToggleFavorites,
         updateUserData,
         isVisible,
         isFavorited }}
    >
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
