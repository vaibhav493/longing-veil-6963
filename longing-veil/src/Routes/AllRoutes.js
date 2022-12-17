import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import LandingPage from "../Components/LandingPage";
import ProductFilters from "../Other/ProductFilters";
import Products from "./Products";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/"  element={}/>
      <Route path="/"  element={}/>  */}
      </Routes>
      ;
    </>
  );
}
