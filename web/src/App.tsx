import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (

    <AuthProvider>
      <Routes />
      <ToastContainer />
      <GlobalStyles />
    </AuthProvider>

  );
}

export default App;
