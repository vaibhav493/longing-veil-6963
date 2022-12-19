import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import SuperMenu from "../Other/SuperMenu";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { InputGroup, Input, InputRightElement, Badge } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaRegUserCircle, FaCartArrowDown } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FiUserCheck } from "react-icons/fi";
import { MdOutlineFavorite, MdLogout } from "react-icons/md";
import { Menu, Box, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export default function Navbar() {
  const redirect = useNavigate();
  const { cart_data } = useContext(CartContext);

  let product_count = (
    <div className="product_count">{cart_data.total_cartData}</div>
  );
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState("");

  const [showNav_Shadow, setShowNav_Shadow] = useState(false);

  const checkScrollingValue = () => {
    if (window.scrollY >= 21) {
      setShowNav_Shadow(true);
    } else {
      setShowNav_Shadow(false);
    }
  };

  window.addEventListener("scroll", checkScrollingValue);

  const UserMenu = () => {
    return (
      <Menu>
        <MenuButton mt="6px">
          {<FaRegUserCircle size="28" color="#2C5282" />}
        </MenuButton>
        <MenuList>
          <Link to={"/login"}>
            <MenuItem>
              <FiUserCheck />
              <Box as="span" ml="10px">
                Log In
              </Box>
            </MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>
              <GrUserAdmin size="20px" />
              <Box ml="10px" as="span">
                Login as Admin
              </Box>
            </MenuItem>
          </Link>
          <Link>
            <MenuItem>
              <MdOutlineFavorite color="red" />
              <Box as="span" ml="10px">
                Favorite
              </Box>{" "}
            </MenuItem>
          </Link>
          <Link>
            <MenuItem>
              <MdLogout />
              <Box as="span" ml="10px">
                Log Out
              </Box>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    );
  };

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
      <div className="gradient_banner">
        <p>Get 50% off on SBI credit Card !!</p>
      </div>

      <div
        className={showNav_Shadow ? "Shadow_styles active" : "Shadow_styles"}
      >
        <div className="Navbar_main_container">
          <div
            title="Go to home"
            onClick={() => {
              redirect("/");
            }}
            className="logo_container"
          >
            <img src="/Logo2.jpg" alt="logo..." />
          </div>

          <div className="main_search_regi_container">
            <div className="search_boex_container Input_field">
              <InputGroup className="Input_field">
                <Input
                  value={value}
                  onChange={({ target }) => setValue(target.value)}
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
              <UserMenu />
            </div>
            <div
              className="cart_icon_container"
              onClick={() => redirect("/cartpage")}
            >
              <FaCartArrowDown size="27" color="#2C5282" />
              {cart_data.total_cartData > 0 ? product_count : null}
            </div>
          </div>
        </div>
        <div className="category_container">
          {category.map((ele, ind) => {
            return (
              <div key={ind} className="category_links">
                <Link color="black" to={"/products"} key={ind}>
                  {ele.toUpperCase()}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <SuperMenu value={value} />
    </>
  );
}
