import React from "react";
import { useEffect } from "react";
import { useState, createContext } from "react";

export const productContext = createContext();

function GetData(category = "allProducts", id = "") {
  return fetch(`https://jungle-green-dog-slip.cyclic.app/${category}/${id}`);
}

export default function ProductContextProvider({ children }) {
  const init_product_data = {
    isLoading: true,
    all_products: [],
    single_product: [],
    single_product_loading: true,
    isError: false,
    curr_category: "allProducts",
    current_selected :false,
    current_selected_action :null
  };
  const [allProducts, setAllProducts] = useState(init_product_data);

  // fetching all data for first time when component gets mounted
  useEffect(() => {
    GetData()
      .then((res) => res.json())
      .then((res) => {
        setAllProducts({ ...allProducts, all_products: res, isLoading: false });
      })
      .catch((err) => console.log(err));
  }, []);

  // this function is for  get products  category wise

  const category_filter = (category) => {
    setAllProducts({ ...allProducts, isLoading: true });

    if (category == "ALLFRAGRANCE") {
      category = "allPerfumes";
    } else if (category == "BODY CREAM") {
      category = "bodyCream";
    } else {
      category = "allProducts";
    }
    GetData(category)
      .then((res) => res.json())
      .then((res) => {
        // console.log("inide coo ->", res);
        setAllProducts({
          ...allProducts,
          all_products: res,
          isLoading: false,
          curr_category: category,
        });
      })
      .catch((err) => console.log(err));
  };

  const Get_Single_Product = (category, id) => {
    GetData(category, id)
      .then((res) => res.json())
      .then((res) => {
        setAllProducts({
          ...allProducts,
          single_product: res,
          single_product_loading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  //function to sort product by price and reviews

  const sort_products = (type, dataType) => {
    setAllProducts({
      ...allProducts,
      isLoading: true,
      current_selected_action: type,
      current_selected:true
    });
    let sorted_data;

    if (dataType === "price") {
      if (type === "H_t_L") {
        sorted_data = allProducts.all_products.sort((a, b) => {
          return b.productPrice - a.productPrice;
        });
      } else if (type === "L_t_H") {
        sorted_data = allProducts.all_products.sort((a, b) => {
          return a.productPrice - b.productPrice;
        });
      }
    } else if (dataType == "reviews") {
      if (type === "H_t_L") {
        sorted_data = allProducts.all_products.sort((a, b) => {
          return b.ratingCount - a.ratingCount;
        });
      } else if (type === "L_t_H") {
        sorted_data = allProducts.all_products.sort((a, b) => {
          return a.ratingCount - b.ratingCount;
        });
      }
    }
     
    setAllProducts({
      ...allProducts,
      all_products: sorted_data,
      isLoading: false
    });
  };

  return (
    <productContext.Provider
      value={{
        allProducts,
        category_filter,
        Get_Single_Product,
        sort_products,
      }}
    >
      {children}
    </productContext.Provider>
  );
}
