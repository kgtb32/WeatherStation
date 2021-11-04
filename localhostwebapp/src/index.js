import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.js";
import Credential from "./pages/credential.js";
import Wifi from "./pages/wifi.js";
import Doc from "./pages/doc.js";
import toast, { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
  <Toaster/>
    <Router>
      <Switch>
        <Route path="/doc">
          <Doc />
        </Route>
        <Route path="/wifi">
          <Wifi />
        </Route>
        <Route path="/credential">
          <Credential />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
