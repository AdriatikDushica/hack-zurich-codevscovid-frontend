import React from "react";
import "./App.css";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Requirements from "./Pages/Requirements";
import AvailableResources from "./Pages/AvailableResources";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/hack-zurich-codevscovid-frontend/" exact>
          <AvailableResources />
        </Route>
        <Route path="/hack-zurich-codevscovid-frontend/requirements">
          <Requirements />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
