import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
// import People from "./components/people/People";
// import Planets from "./components/planets/Planets";
// import Starships from "./components/starships/Starships";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />

    </Switch>
  </BrowserRouter>
);

export default Router;
