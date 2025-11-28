import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './theme';
import { ModalProvider } from './contexts/ModalContext';
import { RestaurantProvider } from './contexts/RestaurantContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RestaurantProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </RestaurantProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
