import { createRoot } from "react-dom/client";
import { CartProvider } from "./contexts/CartProvider";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <App />
  </CartProvider>,
);
