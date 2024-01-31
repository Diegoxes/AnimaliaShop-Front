import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/Layout/Layout.jsx";
import Tienda from "./page/Tienda/Tienda.jsx";
import Home from "./page/Home/Home.jsx";
import store from "./redux/store.js";
import { Auth0Provider } from '@auth0/auth0-react';

import App from "./App.jsx";


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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider
  domain="dev-8yon50uzqfmitkhc.us.auth0.com"
  clientId="3iFSloLFrYZXKOOuPTkfepY4zNhNByI3"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <Provider store={store}>
      <RouterProvider router={router} />
        <App/>
    </Provider>
     </Auth0Provider>
  
);
