import React from "react";
import { Component } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from "./components/e-commerce/cart";
import Loginpage from "./components/e-commerce/loginfrom";
import Offerzone from "./components/e-commerce/offerzone"
import Home from "./components/e-commerce/home";
import Products from "./components/e-commerce/products";
import Contact from "./components/e-commerce/contact";
import Error404 from "./components/e-commerce/404error";

const App=()=>{
  return(
 <>
  <BrowserRouter>
  <Routes>
    <Route exact path="/" Component={Loginpage} />
    <Route exact path="/home" Component={Home} />
    <Route exact path="/products" Component={Products} />
    <Route exact path="/offerzone" Component={Offerzone}/>
    <Route exact path="/cart" Component={Cart} />
    <Route exact path="/contact" Component={Contact} />
    <Route exact path="*" Component={Error404} />
  </Routes>
  </BrowserRouter>
  </>
  )
}
export default App;