import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Needs from "./Pages/Needs/Needs";
import AvailableResources from "./Pages/AvailableResources";
import CreateNeed from "./Pages/Needs/CreateNeed";

function App({ location: { pathname } }) {
  return (
    <div className="App">
      <Header />
      {pathname === "/" ? <Redirect to="/needs" /> : null}
      <Switch>
        <Route path="/available-resources" exact>
          <AvailableResources />
        </Route>
        <Route path="/needs" exact>
          <Needs />
        </Route>
        <Route path="/needs/create" exact>
          <CreateNeed />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
