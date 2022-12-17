import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import "aos";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import ProductFilters from "./Other/ProductFilters";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({ easing: "ease", offset: 130, duration: 800 });
  return (
    <div className="App">
      {/* <ProductFilters /> */}
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
