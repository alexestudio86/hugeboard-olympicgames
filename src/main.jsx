import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginProvider } from './context/LoginProvider.jsx';
import App from './router/App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <App/>
    </LoginProvider>
  </React.StrictMode>
);
