import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  let init_cart_data = {
    cartData: [],
    loading_cartData: false,
    total_cartData: 0,
  };

  const [cart_data, setCartData] = useState(init_cart_data);

  //function for altert user  to know data allready is in database

  const alertCartDataAvailable = (msg, type) => {
    if (type == "added") {
      toast.success(msg, {
        position: "top-center",
        autoClose: 1900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (type == "allready available") {
      toast.info(msg, {
        position: "top-center",
        autoClose: 1900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  // function to get Cart Data

  const updateCartData = (ele) => {
    let shouldAdded = true;
    cart_data.cartData.forEach((product_id) => {
      if (ele.id === product_id.id) {
        shouldAdded = false;
        alertCartDataAvailable(
          "Product allready in cart !",
          "allready available"
        );
        return;
      }
    });
    if (shouldAdded == true) {
      setCartData({
        ...cart_data,
        cartData: [...cart_data.cartData, ele],

        total_cartData: cart_data.total_cartData + 1,
      });
      alertCartDataAvailable("Added to the Cart !", "added");
    }
  };

  const update_quantity = (id, action) => {
    setCartData({ ...cart_data, loading_cartData: true });

    let upadeted_data = cart_data.cartData.map((ele) => {
      return ele.id === id
        ? { ...ele, quantity: ele.quantity + Number(action) }
        : ele;
    });

    console.log("updated quantity ->", upadeted_data);
    setCartData({ ...cart_data, loading_cartData: false });
    setCartData({ ...cart_data, cartData: upadeted_data });
  };
  const delete_products = (id) => {
    let upadeted_data = cart_data.cartData.filter((ele) => {
      return id !== ele.id ? ele : null;
    });

    // setCartData({
    //   ...cart_data,
    //   total_cartData: cart_data.total_cartData - 1,
    // });
    setCartData({
      ...cart_data,
      cartData: upadeted_data,
      total_cartData: cart_data.total_cartData - 1,
    });
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart_data,
          updateCartData,
          alertCartDataAvailable,
          update_quantity,
          delete_products,
        }}
      >
        {children}
      </CartContext.Provider>
      <ToastContainer />
    </>
  );
}
