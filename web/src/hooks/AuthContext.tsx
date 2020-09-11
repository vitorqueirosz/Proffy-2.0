import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../services/api';

interface User {
    id: string;
    avatar: string;
    name: string;
    email: string;
    password: string;
    whatsapp: string;
    city: string;
    uf: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface signUpCredentials {
    name: string;
    email: string;
    whatsapp: number;
    password: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface AuthContextData {
    signIn(credentials: SignInCredentials): Promise<void>;
    signUp(credentials: signUpCredentials): Promise<void>;
    signOut(): void;
    user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Proffy:token');
    const user = localStorage.getItem('@Proffy:user');

    if (token && user) {
      //   api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signUp = useCallback(async ({
    name, email, whatsapp, password,
  }) => {
    await api.post('users', {
      name,
      email,
      whatsapp,
      password,
    });

    // const { token, user } = response.data;

    // localStorage.setItem('@Proffy:token', token);
    // localStorage.setItem('@Proffy:user', user);

    // setData({ token, user });
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;
      console.log(user);
      localStorage.setItem('@Proffy:token', token);
      localStorage.setItem('@Proffy:user', JSON.stringify(user));

      setData({ token, user });
    }, [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Proffy:token');
    localStorage.removeItem('@Proffy:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{
      signUp, signIn, signOut, user: data.user,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
