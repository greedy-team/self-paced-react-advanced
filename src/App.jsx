import GlobalStyle from "./styles/Globalstyle.jsx";
import Header from "./components/head/Header.jsx";
import RestaurantList from "./components/main/RestaurantList.jsx";
import RestaurantFilter from "./components/main/RestaurantFilter.jsx";
import RestaurantDetailModal from "./components/aside/RestaurantDetailModal.jsx";
import RestaurantAddModal from "./components/aside/RestaurantAddModal.jsx";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";

const ErrorContainer = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  text-align: center;

  h2 {
    color: var(--primary-color);
    margin-bottom: 16px;
  }

  pre {
    color: var(--grey-400);
    margin-bottom: 16px;
    white-space: pre-wrap;
  }

  button {
    padding: 8px 16px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  let msg = "";

  if (error.message === "AddModal Error") {
    msg = "레스토랑을 추가하는 과정 중, 서버 연결에 문제가 발생했습니다.";
  } else if (error.message === "Fetching Error") {
    msg = "Selector에서 fetching 오류가 발생했습니다.";
  } else {
    msg = "레스토랑 리스트를 fetching 하는 과정에서 오류가 발생했습니다.";
  }

  return (
    <ErrorContainer>
      <h2>오류가 발생했습니다</h2>
      <pre>{msg}</pre>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </ErrorContainer>
  );
};

function ModalContainer() {
  const modalStateValue = useSelector((state) => state.modal.value);

  return (
    <aside>
      {modalStateValue === "detail" && <RestaurantDetailModal />}
      {modalStateValue === "add" && <RestaurantAddModal />}
    </aside>
  );
}

function RestaurantContainer() {
  return (
    <main>
      <RestaurantFilter />
      <RestaurantList />
    </main>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Restaurant List Loading...</div>}>
          <RestaurantContainer />
          <ModalContainer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
