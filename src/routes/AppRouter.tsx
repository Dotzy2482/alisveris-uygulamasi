import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";
import FavoritesPage from "../pages/FavoritesPage";

const AppRouter = () => {
  const location = useLocation();
  const showHeader = location.pathname !== "/login" && !!localStorage.getItem("userName");

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={localStorage.getItem("userName") ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
