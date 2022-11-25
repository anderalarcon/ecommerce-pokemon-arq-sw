import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import Details from "../../Pages/Details/Details";
import Error from "../../Pages/Error/Error";
import Login from "../../Pages/Login/Login";
import { MsalProvider } from "@azure/msal-react";
import NewProduct from "../../Pages/NewProduct/NewProduct";
const Router = ({ msalInstance }) => (
  <MsalProvider instance={msalInstance}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route
          path="/:category/:id_product/"
          element={<Details />}
        /> 
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </MsalProvider>
);

export default Router;
