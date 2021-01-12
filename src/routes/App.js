import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "@/views/Home";
import "@/assets/styles/App.scss";
import Items from "@/views/Items";
import ItemInfo from "@/views/ItemInfo";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={Items} />
      <Route  path="/items/:id" component={ItemInfo} />
    </Switch>
  </BrowserRouter>
);

export default App;
