<<<<<<< HEAD
//  React, hooks y componentes de React
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './redux/store';

// componentes y páginas necesarias
import Home from './page/Home/Home';
import Layout from './Components/Layout/Layout';
import {Login} from './components/Login/Login.jsx';
import Tienda from './page/Tienda/Tienda';
import About from './Components/About/About';
import Carrito from './components/Carrito/Carrito.jsx';
import DetailProduct from './Components/ProductDetail/ProductDetail';
import DashboardRoutes from './dashboardRoutes.jsx';
import Banned from './Dashboard de Administradores/banned';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [isBanned, setIsBanned] = useState(false);

  useEffect(() => {
    const checkBannedStatus = async () => {
      
      if (isAuthenticated && user) {
        try {
          const response = await fetch('http://localhost:3001/users');
          const users = await response.json();       
          const authenticatedUser = users.find(u => u.email === user.email);
          setIsBanned(authenticatedUser && authenticatedUser.isBanned);
        } catch (error) {
          console.error('Error checking banned status:', error);
        }
      }
    };

    checkBannedStatus();
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {isBanned ? (
        <Routes>
          <Route path="/" element={<Banned />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/DetailProduct/:id" element={<DetailProduct />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
};

ReactDOM.render(
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
  <Auth0Provider
    domain="dev-8yon50uzqfmitkhc.us.auth0.com"
    clientId="3iFSloLFrYZXKOOuPTkfepY4zNhNByI3"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
<<<<<<< HEAD
      <App />
=======
      <BrowserRouter>
        <App />
      </BrowserRouter>
>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);
<<<<<<< HEAD

// verification comment for deploy 3
=======
>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
