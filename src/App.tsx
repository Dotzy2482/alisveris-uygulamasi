import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;