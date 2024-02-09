import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Tienda from "./page/Tienda/Tienda";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./page/Home/Home";
import Layout from "./components/Layout/Layout";
import CreateProduct from "./components/Forms/CreateProduct";
import CreateCategory from "./components/Forms/CreateCategory";
import About from "./components/About/About";
import Carrito from "./components/Carrito/Carrito";
import DetailProduct from "./components/ProductDetail/ProductDetail";
import { Login } from "./components/Login/Login"

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
      { path: "/carrito", element: <Carrito /> },
      {
        path: "/DetailProduct/:id",
        element: <DetailProduct />,
      },
      {
        path: "/formularioProducto",
        element: <CreateProduct />,
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
      <RouterProvider router={router} />
    </Provider>
  </Auth0Provider>
);