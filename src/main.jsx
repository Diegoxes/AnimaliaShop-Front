import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain='dev-8yon50uzqfmitkhc.us.auth0.com'
    clientId='3iFSloLFrYZXKOOuPTkfepY4zNhNByI3'
    redirectUri={window.location.origin}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);
