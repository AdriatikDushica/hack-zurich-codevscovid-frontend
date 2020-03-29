import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Needs from "./Pages/Needs/Needs";
import AvailableResources from "./Pages/AvailableResources";
import CreateNeed from "./Pages/Needs/CreateNeed";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
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

export default App;
