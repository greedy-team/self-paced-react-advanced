import "./App.css";
import styled from "styled-components";
import { RestaurantProvider } from "./contexts/RestaurantContext.jsx";
import GlobalStyle from "./styles/GlobalStyle";

import Header from "./Header.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import ModalRenderer from "./ModalRenderer.jsx";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--grey-100);
  min-height: 100vh;
`;

function App() {
  return (
    <RestaurantProvider>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <CategoryFilter /> 
        <RestaurantList />
      </MainContainer>
      <ModalRenderer />
    </RestaurantProvider>
  );
}

export default App;