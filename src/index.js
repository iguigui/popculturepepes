import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// "metamask-react" Better then "use-metamask" ?? (base on download per weeks yes)
// import { MetamaskStateProvider } from "use-metamask";
import { MetaMaskProvider } from "metamask-react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <MetaMaskProvider>
      <App />
    </MetaMaskProvider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
