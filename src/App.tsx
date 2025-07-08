import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <FavoritesProvider>
            <AppRouter />
          </FavoritesProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;