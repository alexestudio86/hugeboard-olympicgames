import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginProvider } from './context/LoginProvider.jsx';
import { DataProvider } from './context/DataProvider.jsx';
import App from './router/App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <DataProvider>
        <App/>
      </DataProvider>
    </LoginProvider>
  </React.StrictMode>
);
