//  React, hooks y componentes de React
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// componentes y páginas necesarias
import Home from "./page/Home/Home";
import Layout from "./Components/Layout/Layout";
import { Login } from "./Components/Login/Login";
import Tienda from "./page/Tienda/Tienda";
import About from "./Components/About/About";
import DetailProduct from "./Components/ProductDetail/ProductDetail";
import DashboardRoutes from "./dashboardRoutes.jsx";
import Banned from "./Dashboard de Administradores/banned";
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCart from "./page/ShoppingCart/ShoppingCart.jsx";

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [isBanned, setIsBanned] = useState(false);

  const URL = "http://localhost:3001";
  // const URL = "https://animaliashop-backend.onrender.com";

  useEffect(() => {
    const checkBannedStatus = async () => {
      if (isAuthenticated && user) {
        try {
          const response = await fetch(`${URL}/users`);
          const users = await response.json();
          const authenticatedUser = users.find((u) => u.email === user.email);
          setIsBanned(authenticatedUser && authenticatedUser.isBanned);
        } catch (error) {
          console.error("Error checking banned status:", error);
        }
      }
    };

    checkBannedStatus();
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {isBanned ? (
        <Route path='/' element={<Banned />} />
      ) : (
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='/tienda'
            element={isBanned ? <Navigate to='/' /> : <Tienda />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/carrito' element={<ShoppingCart />} />
          <Route path='/DetailProduct/:id' element={<DetailProduct />} />
          <Route path='/dashboard/*' element={<DashboardRoutes />} />
        </Route>
      )}
    </Routes>
  );
};

export default App;
