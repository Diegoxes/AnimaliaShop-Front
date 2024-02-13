import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { CartProvider } from "./context/CartContext.jsx";
import Tienda from "./page/Tienda/Tienda";
import store from "./redux/store.js";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./page/Home/Home";
import Layout from "./Components/Layout/Layout";
import CrearProducto from "./Components/Forms/CreateProduct";
import CreateCategory from "./Components/Forms/CreateCategory";
import About from "./Components/About/About";
import Carrito from "./Components/Carrito/Carrito";
import DetailProduct from "./Components/ProductDetail/ProductDetail";
import { Login } from "./Components/Login/Login";
import ShoppingCart from "./page/ShoppingCart/ShoppingCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/tienda",
        element: <Tienda />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/carrito", element: <ShoppingCart /> },
      {
        path: "/DetailProduct/:id",
        element: <DetailProduct />,
      },
      {
        path: "/formularioProducto",
        element: <CrearProducto />,
      },
      {
        path: "/formularioCategoria",
        element: <CreateCategory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider
    domain='dev-8yon50uzqfmitkhc.us.auth0.com'
    clientId='3iFSloLFrYZXKOOuPTkfepY4zNhNByI3'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </Auth0Provider>
);

// verification comment for deploy 3
