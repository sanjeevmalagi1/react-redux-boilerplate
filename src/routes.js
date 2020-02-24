import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Form from "./js/components/Form";

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <h1>Home Page</h1>
        </Route>
        <Route path="/">
          <Form />
        </Route>
      </Switch>
    </Router>
  )
};

export default Routes;

