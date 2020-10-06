import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./Pages/Front-Page/Front-page";
import LoginPage from "./Pages/Login/Login-page.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/main">
            <FrontPage />
          </Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
