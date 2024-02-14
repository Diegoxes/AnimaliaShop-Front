//  React, hooks y componentes de React
import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { CartProvider } from "./context/CartContext.jsx";
import App from "./App.jsx";

ReactDOM.render(
  <Auth0Provider
    domain='dev-8yon50uzqfmitkhc.us.auth0.com'
    clientId='3iFSloLFrYZXKOOuPTkfepY4zNhNByI3'
    redirectUri={window.location.origin}>
    <Provider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// verification comment for deploy 3
