import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RestaurantDataProvider } from "./contexts/RestaurantDataContext";
import { RestaurantModalProvider } from "./contexts/RestaurantModalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RestaurantDataProvider>
      <RestaurantModalProvider>
        <App />
      </RestaurantModalProvider>
    </RestaurantDataProvider>
  </StrictMode>
);
