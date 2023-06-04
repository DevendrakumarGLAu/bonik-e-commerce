import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Auth0Provider
  //   domain="dev-dlm68r4kg26mxtyb.us.auth0.com"
  //   clientId="LrLBrlCWFLOdKakZGM9xF03gs2MBngdd"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
  //   <App />
  // </Auth0Provider>,
  document.getElementById("root")
)
