import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Team from "./pages/Team";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/team" component={Team} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
