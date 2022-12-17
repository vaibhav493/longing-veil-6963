import React from "react";
import ReactDOM from "react-dom";
import { Box, Stack } from "@chakra-ui/react";
import "../Styles/ProductFilter.css";

export default function ProductFilters() {
  const all_aromatherapy = ["ALL AROMATHERAPY", "MOISTURIZERS"];

  const Bath_shower_category = [
    "ALL BATH AND SHOWER",
    "BATH ACCESSORIES",
    "BODY SCRUB",
    "BODY WASH AND SHOWER GEL",
  ];
  const Fragrance_category = [
    "BODY SPRAYS AND MISTS",
    "ALLFRAGRANCE",
    "PERFUME AND COLOGNE",
    "PERFUME AND COLOGNE",
  ];

  const Moisturizer_category = [
    "ALL MOISTURIZERS",
    "BODY CREAM",
    "BODY LOTION",
    "HAND CREAM",
  ];

  const Body_care_offers = [
    "New Arrivals",
    "Select Items - Buy 2 ,Get 2",
    "Body Care - Buy 3 , Get 1",
    "Aromatherapy - Buy 3 , Get 1",
    "s Body Care - Buy 3 , Get ",
  ];

  return (
    <div className="Main_container_ProFilter">
      <Stack className="container_product_filter">
        {/* {'First container of product Filter'} */}
        <div className="cont1_pro_filter">
          <p className="category_heading">AROMATHERAPY</p>
          <div>
            {all_aromatherapy.map((ele, index) => {
              return (
                <div className="sub_Category" key={index}>
                  {ele}
                </div>
              );
            })}
          </div>
        </div>

        {/* {'sECOND container of product Filter'} */}
        <div className="cont1_pro_filter">
          <p className="category_heading">BATH AND SHOWER</p>
          <div>
            {Bath_shower_category.map((ele, index) => {
              return (
                <div className="sub_Category" key={index}>
                  {ele}
                </div>
              );
            })}
          </div>
        </div>

        {/* {'third container of product Filter'} */}
        <div className="cont1_pro_filter">
          <p className="category_heading">FRAGRENCES</p>
          <div>
            {Fragrance_category.map((ele, index) => {
              return (
                <div className="sub_Category" key={index}>
                  {ele}
                </div>
              );
            })}
          </div>
        </div>

        {/* {'FIFTH container of product Filter'} */}
        <div className="cont1_pro_filter">
          <p className="category_heading">MOISTURIZERS</p>
          <div>
            {Moisturizer_category.map((ele, index) => {
              return (
                <div className="sub_Category" key={index}>
                  {ele}
                </div>
              );
            })}
          </div>
        </div>

        {/* {'SISXTH container of product Filter'} */}
        <div className="cont1_pro_filter">
          <p className="category_heading">BODY CARE OFFERS</p>
          <div>
            {Body_care_offers.map((ele, index) => {
              return (
                <div className="sub_Category" key={index}>
                  {ele}
                </div>
              );
            })}
          </div>
        </div>
      </Stack>
    </div>
  );
}
