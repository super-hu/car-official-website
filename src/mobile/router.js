import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./home/index.jsx";
import karaShow from "./kara/index.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={karaShow} path="/kara-show" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
