import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Router from "./Components/Router/Router";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
const root = ReactDOM.createRoot(document.getElementById("root"));
const pca = new PublicClientApplication({
  auth: {
    clientId: "34e15520-0905-450a-a00d-dfbef1c2feef",
    authority:
      "https://login.microsoftonline.com/1b19fa48-927a-461b-b61a-6ba2684b1846",
    redirectUri: "http://localhost:3000",
  },
});
pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    pca.setActiveAccount(event.payload.account);
  }
});
root.render(
  <React.StrictMode>
    <Router msalInstance={pca} />
  </React.StrictMode>
);
