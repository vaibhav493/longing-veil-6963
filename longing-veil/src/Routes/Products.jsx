import ProductFilters from "../Other/ProductFilters";
import { useState, useEffect, useContext } from "react";
import Loading from "../Other/Loading";
import "../Styles/Products.css";
import { BsCartPlus } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import Footer from '../Components/Footer'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
} from "@chakra-ui/react";

import { productContext } from "../Context/ProductContext";

export default function Products() {
  const { all_products, isLoading } = useContext(productContext);
  const Alert_addtoCart = () => {
    toast.success("Added to Cart !", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const Action_buttons = () => {
    return (
      <>
        <Button
        onClick={Alert_addtoCart}
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

  if (isLoading) {
    return (
      <div style={{ marginTop: "20%", marginLeft: "48%" }}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="breadCrumb_container_and_banner_cont">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Docs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
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
            {all_products.map((ele) => {
              return (
                <div key={ele.id} className="product_grid_item">
                  <div className="product_img">
                    <img src={ele.image} alt="loading..." />
                  </div>
                  <div className="produnct_name">
                    <h4>{ele.link}</h4>
                  </div>
                  <div className="sub_name_category">
                    {/* <p>{ele.sub-title}</p> */}
                  </div>
                  <div className="price_cont">
                    <p>{ele.value}</p>
                  </div>
                  <div className="offer_div">
                    <p>{""}</p>
                  </div>
                  <div className="buttons_action">
                    <Action_buttons />
                  </div>
                  <div className="favourite_btn">
                    <FiHeart
                      color="#C53030
"
                      size="17px"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
      <ToastContainer />
    </>
  );
}
