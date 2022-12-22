import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import LandingPage from "../Components/LandingPage";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import CartPage from "./CartPage";
import OrderSuccessBanner from "../Components/OrderSuccessBanner";
import OrderSuccessPage from "./OrderSuccessPage";
 

import PrivateRoute from "./PrivateRoute";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route path="/single_product" element={<SingleProduct />} />
        <Route path="/order_Successfull" element={<OrderSuccessPage />} />
      </Routes>
      ;
    </>
  );
}
 