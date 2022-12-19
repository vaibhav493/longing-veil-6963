import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import LandingPage from "../Components/LandingPage";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import CartPage from "./CartPage";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single_product" element={<SingleProduct />} />
      </Routes>
      ;
    </>
  );
}
 