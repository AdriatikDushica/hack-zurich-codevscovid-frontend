import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Requests from "./Pages/Requests";
import AvailableResources from "./Pages/AvailableResources";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <AvailableResources />
        </Route>
        <Route path="/requests">
          <Requests />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
