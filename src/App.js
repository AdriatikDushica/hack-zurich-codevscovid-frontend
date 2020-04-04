import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch, withRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import GetStarted from "./Pages/GetStarted";

function App({ location: { pathname } }) {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} component={Homepage} exact />
        <Route path={"/get-started"} component={GetStarted} exact />
      </Switch>
    </div>
  );
}

export default withRouter(App);
