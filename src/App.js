import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Needs from "./Pages/Needs";
import AvailableResources from "./Pages/AvailableResources";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <AvailableResources />
        </Route>
        <Route path="/needs">
          <Needs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
