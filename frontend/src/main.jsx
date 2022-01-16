import React from "react";
import ReactDOM from "react-dom";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
