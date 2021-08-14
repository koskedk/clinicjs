import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { DrugPage } from "./DrugPage";
import { DrugHome } from "./DrugHome";

export const Main = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/pharmacy/"> Home</Link>
          </li>
          <li>
            <Link to="/pharmacy/stock/"> Stock</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/pharmacy/stock/">
            <DrugPage />
          </Route>
          <Route path="/pharmacy/">
            <DrugHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
