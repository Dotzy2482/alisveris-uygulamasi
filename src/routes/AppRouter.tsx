import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";

const AppRouter = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    setUserName(storedName);
  }, []);


  const showHeader = location.pathname !== "/login" && userName;

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={userName ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;