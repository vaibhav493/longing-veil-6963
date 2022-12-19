import "../Styles/CartTotalCard.css";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import { useDisclosure } from "@chakra-ui/react";
import CheckoutFormModel from '../Other/CheckoutFormModel'
import CheckoutForm from "./CheckoutForm";

export default function CartTotalCard({ data = [] }) {
  const { cart_data } = useContext(CartContext);
  const { cartData } = cart_data;
  const { isOpen, onOpen, onClose } = useDisclosure();


  let grandTotal = cartData.reduce((acc, ele) => {
    return acc + ele.productPrice * ele.quantity;
  }, 0);

  return (
    <>
      <CheckoutFormModel isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <CheckoutForm />
      </CheckoutFormModel>
      <div className="mother_container">
        <div className="product_total_main_container">
          <div className="bills_container">
            <p className="total1">MERCHANDISE SUBTOTAL</p>
            <p className="total2"> SHIPPING HANDLING - Standard</p>
            <p className="total3">SALES TAX</p>
            <p className="title4">
              Tax is estimated and will be calculated when your order is
              processed.
            </p>
          </div>
          <div className="bills_price_container">
            <p className="price1">$ {grandTotal}</p>
            <p className="price3">$ 6.99</p>
            <p className="price3">$ 4.75</p>
          </div>
        </div>
        <div className="button_allTotal_container">
          <div className="master_total_container">
            <p className="master_total">ORDER TOTAL (USD)</p>
          </div>
          <div className="master_t__price">
            <p className="master_T_total">
              $ {Math.ceil(grandTotal + 4.55 + 6.99)}
            </p>
          </div>
        </div>
        <div className="buttons_container">
          {/* <Button></Button> */}
          <Button
            onClick={onOpen}
            ml="55%"
            mt='8px'
            h="30px"
            w="133px"
            color='white'
            borderRadius="1px"
            bgColor="#2D3748"
          >
            checkout
          </Button>
        </div>
      </div>
    </>
  );
}
