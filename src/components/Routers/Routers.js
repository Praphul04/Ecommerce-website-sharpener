import React from "react";

import Productlist from "../products/productlist"
import About from "../layout/About"

import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./const.js";
import Tours from "../layout/Home";
import ContactUs from "../layout/CantactUs";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={RoutePath.Home} element={<Tours></Tours>} />
        <Route path={RoutePath.Store} element={<Productlist />} />
        <Route path={RoutePath.About} element={<About />} />
        <Route path={RoutePath.CantactUs} element={<ContactUs/>}/>
      </Routes>
    </div>
  );
};

export default Routers;