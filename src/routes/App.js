import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "@/views/Home";
import "@/assets/styles/App.scss";
import Items from "@/views/Items";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={Items} />
    </Switch>
  </BrowserRouter>
);

export default App;
