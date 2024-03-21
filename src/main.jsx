import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingContext.jsx";
import WishProvider from "./context/WishContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <WishProvider>
            <CartProvider>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </CartProvider>
          </WishProvider>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
