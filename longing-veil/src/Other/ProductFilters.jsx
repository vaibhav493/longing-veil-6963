import { useContext } from "react";
import ReactDOM from "react-dom";
import { Box, Stack } from "@chakra-ui/react";
import "../Styles/ProductFilter.css";
import { productContext } from "../Context/ProductContext";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

export default function ProductFilters() {
  const { category_filter, sort_products, allProducts } =
    useContext(productContext);
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

  const sorting_component = (ele) => {
    category_filter(ele);
  };

  return (
    <div className="Main_container_ProFilter">
      <Stack className="container_product_filter">
        <Accordion allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      fontWeight="410"
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize="14"
                      ml="0"
                      color="black"
                    >
                      SHORT PRODUCTS BY -
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p
                    style={{
                      color:
                        allProducts.current_selected &&
                        allProducts.current_selected_action === "L_t_H"
                          ? "red"
                          : null,
                    }}
                    onClick={() => sort_products("L_t_H", "price")}
                    className="sub_Category"
                  >
                    {" "}
                    LOW TO HIGH | price |
                  </p>
                  <p
                    onClick={() => sort_products("H_t_L", "price")}
                    className="sub_Category"
                  >
                    HIGH TO LOW | price |
                  </p>
                  <p
                    onClick={() => sort_products("L_t_H", "reviews")}
                    className="sub_Category"
                  >
                    LOW TO HIGH | reviews |
                  </p>
                  <p
                    onClick={() => sort_products("H_t_L", "reviews")}
                    className="sub_Category"
                  >
                    HIGH TO LOW | reviews |
                  </p>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
        {/* {'third container of product Filter'} */}
        <div className="cont1_pro_filter">
          <p className="category_heading">FRAGRENCES</p>
          <div>
            {Fragrance_category.map((ele, index) => {
              return (
                <div
                  onClick={() => {
                    sorting_component(ele);
                  }}
                  className="sub_Category"
                  key={index}
                >
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
                <div
                  onClick={() => sorting_component(ele)}
                  className="sub_Category"
                  key={index}
                >
                  {ele}
                </div>
              );
            })}
          </div>
        </div>
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
