import { useContext } from "react";
import "../Styles/CartPage.css";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext";
import CartProductCard from "../Components/CartProductCard";
import CartTotalCard from "../Components/CartTotalCard";
import PromoImg from "../Other/PromoImg";
import Loading from '../Other/Loading'
import Footer from '../Components/Footer'


export default function CartPage() {

const { cart_data } = useContext(CartContext);
const { cartData, loading_cartData } = cart_data;

 

if (loading_cartData){

    return <Loading/>
}
  return (
    <>
      <div style={{ paddingTop: "10px", backgroundColor: "#F7FAFC" }}>
        <div className="bag_title">
          <p className="Bag_title"> | Your Bag |</p>
           
        </div>

        <div className="total_item_title">
          <p className="total_items">
            {" "}
            total items : {cart_data.total_cartData}
          </p>
        </div>

        <div className="main_cart_container">
          {cartData.map((ele, index) => {
            return <CartProductCard key={index} data={ele} />;
          })}
        </div>
      </div>
      {/* <Footer/> */}

      <CartTotalCard data={cartData} />
      <PromoImg />
    </>
  );
}
