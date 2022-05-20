import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Store from "./components/Store/Store";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import Notfound from "./components/Notfound/Notfound";
import ProductDetail from "./components/ProductDetail/ProductDetail";


function App() {
  return (
    <>
    <Header></Header>
    <Router>
    <Switch>
        <Route path="/shop"><Store></Store></Route>
        <Route path="/review"><Review></Review></Route>
        <Route path="/inventory"><Inventory></Inventory></Route>
        <Route exact path="/"><Store></Store></Route>
        <Route path="/product/:productKey"><ProductDetail></ProductDetail></Route>
        <Route path="*"><Notfound></Notfound></Route>
        
        
    </Switch>
    </Router>
    </>
  );
}

export default App;
