import { Route, Routes } from "react-router-dom";
import { PageLogin } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { DashboardPage } from "../pages/Dashboard";
import { CartProvider } from "../contexts/CartContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
