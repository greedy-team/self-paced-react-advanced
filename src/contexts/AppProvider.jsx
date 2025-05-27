import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import { RestaurantProvider } from './RestaurantContext';
import { ModalProvider } from './ModalContext';

const AppProvider = ({ children }) => {
  return (
    <RestaurantProvider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ModalProvider>
    </RestaurantProvider>
  );
};

export default AppProvider;
