import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ModalProvider from "./contexts/ModalProvider.jsx";
import RestaurantProvider from "./contexts/RestaurantProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </RestaurantProvider>
  </React.StrictMode>,
);
