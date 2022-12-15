import { useState, useEffect } from "react";
import "../Styles/Navbar.css";

import { InputGroup, Input, InputRightElement, Badge } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaRegUserCircle, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const r = 1;
  let product_count = <div className="product_count">{r}</div>;
  const category = [
    "All",
    "New and Now",
    "Body Care",
    "Skin Care",
    "Gifts",
    "Hand Soaps",
    "Cleansers",
    "Consmetics",
    "Lotion's",
  ];
  return (
    <>
      <div className="Shadow_styles">
        <div className="gradient_banner">
          <p>Get 50% off on SBI credit Card !!</p>
        </div>
        <div className="Navbar_main_container">
          <div className="logo_container">
            <img src="/Logo2.jpg" alt="logo..." />
          </div>

          <div className="main_search_regi_container">
            <div className="search_boex_container">
              <InputGroup className="Input_field">
                <Input
                  className="Input_field"
                  borderColor="blue"
                  placeholder="search by fregrence or products... "
                  outline={false}
                  borderRadius="2px"
                  h="35px"
                />
                <InputRightElement
                  children={<SearchIcon size="sm" color="#2B6CB0" />}
                />
              </InputGroup>
            </div>
            <div className="user_signup_icon_container">
              <FaRegUserCircle size="27" color="#2C5282" />
            </div>
            <div className="cart_icon_container">
              <FaCartArrowDown size="27" color="#2C5282" />
              {r > 0 ? product_count : null}
            </div>
          </div>
        </div>
        <div className="category_container">
          {category.map((ele) => {
            return <Link>{ele.toUpperCase()}</Link>;
          })}
        </div>
      </div>
    </>
  );
}
