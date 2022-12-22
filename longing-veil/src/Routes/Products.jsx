import ProductFilters from "../Other/ProductFilters";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Other/Loading";
import "../Styles/Products.css";
import { BsCartPlus } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";
import { CartContext } from "../Context/CartContext";
import { useRef } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
} from "@chakra-ui/react";

import { productContext } from "../Context/ProductContext";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Products() {
  const scrollTop = useRef(null);
  console.log("ran product component");
  const reDirect = useNavigate();
  const { allProducts, Get_Single_Product } = useContext(productContext);
  const { updateCartData } = useContext(CartContext);
  // console.log('indide->',all_products)

  const Action_buttons = () => {
    return (
      <>
        <Button
          w="160px"
          h="32px"
          mt="8px"
          mr="5px"
          leftIcon={<BsCartPlus />}
          bg="#4A5568"
          color="white"
          variant="solid"
          borderRadius="3px"
        >
          Add to cart
        </Button>
      </>
    );
  };

  // const scrollTopFunc = () =>{
  //   scrollTop.current?.scrollIntoView({
  //     behavior: "smooth",
       
  //     inline: "nearest",
  //   });

  // }

  // useEffect(() => {
  //   scrollTopFunc()
    
  // }, []);

  if (allProducts.isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div ref={scrollTop}></div>
      <div
        style={{ backgroundColor: "#e2edf8" }}
        className="breadCrumb_container_and_banner_cont"
      >
        <div style={{ width: "100%", paddingBottom: "5px" }}>
          <Breadcrumb
            ml="30px"
            mb="12px"
            mt="12px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="red">
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink></BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      {/* product and filter container */}
      <div className="mega_container">
        <div className="filter_section">
          <ProductFilters />
        </div>
        <div className="main_product_container">
          <div className="banner_img_cont">
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw126cc0be/images/Christmas2022/xcat_hp-gifting-zone_c1_hb.jpg?yocs=s_"
              alt=""
            />
          </div>
          <div className="mother_container_products_grid">
            {allProducts.all_products.map((ele, index) => {
              return (
                <div
                  style={{ backgroundColor: "white" }}
                  key={ele.id}
                  className="product_grid_item"
                  data-aos="fade-up"
                  data-aos-offset="127"
                >
                  <div
                    className="product_img"
                    onClick={() => {
                      Get_Single_Product(allProducts.curr_category, ele.id);
                      reDirect("/single_product");
                    }}
                  >
                    <img src={ele.productImage} alt="loading..." />
                  </div>

                  <div className="produnct_name">
                    <h4>{ele.productName}</h4>
                  </div>
                  <div className="sub_name_category">
                    {/* <p>{ele.sub-title}</p> */}
                  </div>
                  <div className="price_cont">
                    <p>
                      {"$"}
                      {ele.productPrice}
                    </p>
                  </div>
                  <div
                    className="offer_div"
                    style={{ fontSize: "11px", color: "red" }}
                  >
                    <p> total reviews : {ele.ratingCount}</p>
                  </div>
                  <div
                    className="buttons_action"
                    onClick={() => updateCartData({ ...ele, quantity: 1 })}
                  >
                    <Action_buttons />
                  </div>
                  <div className="favourite_btn">
                    <FiHeart color="#C53030" size="17px" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <button onClick={scrollTopFunc}>GO TO TOP</button> */}
      <Footer />
    </>
  );
}
