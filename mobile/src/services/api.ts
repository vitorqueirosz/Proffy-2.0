import AsyncStorage from '@react-native-community/async-storage';
import axios, { AxiosRequestConfig } from 'axios';


const api = axios.create({
    baseURL: 'http://192.168.0.119:3333'
});

// api.interceptors.request.use( async (config: AxiosRequestConfig) => {

//     try {

//         const token = await AsyncStorage.getItem('@Proffy:token');
//         const user = await AsyncStorage.getItem('@Proffy:user');

//         if (token && user) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//     } catch (err) {
//         console.log(err);
//     }
//     return config;
// })


export default api;
