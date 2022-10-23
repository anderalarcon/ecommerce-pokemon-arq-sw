import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import Details from "../../Pages/Details/Details";
import Error from "../../Pages/Error/Error";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id_category/:category" element={<Category />} />
      <Route
        path="/category/:id_category/:category/:id_product/:product"
        element={<Details />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
