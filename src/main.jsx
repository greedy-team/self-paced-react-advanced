import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { store } from "./store/AppStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <Provider store={store}>
        <App />
      </Provider>
    </RecoilRoot>
  </StrictMode>
);
