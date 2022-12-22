
import '../Styles/OrderSuccessBanner.css'
import { useContext } from 'react';
import  { CartContext} from '../Context/CartContext'
import {Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export default function OrderSuccessBanner({price}){

    const reDirect = useNavigate()
    const { cart_data } = useContext(CartContext);
      let grandTotal = cart_data.cartData.reduce((acc, ele) => {
        return acc + ele.productPrice * ele.quantity;
      }, 0);


    return (
      <div>
        <div className="main_container">
          <div className="success_img_banner">
            <img
              src="https://i.pinimg.com/originals/91/36/df/9136df0949a40e6567c6f4f7a6343672.gif"
              alt=""
            />
          </div>
          <div className="succsess_title2">
            <p>Thanks For shopping</p>
          </div>
          <div className="succsess_title1">
            <p>Order Successfully Placed !!</p>
          </div>

          <div className="order_summer_container">
            <div className="productbills">
              <p>total ordered items</p>
            </div>
            <div className="total_cart_items">{cart_data.total_cartData}</div>
          </div>
          <div className="order_summer_container2">
            <div className="productPrice">
              <p>total Price</p>
            </div>
            <div className="total_price">{'$'+" "+ grandTotal}</div>
          </div>

          <Button
            onClick={() => reDirect("/")}
            mt="15px"
            ml="32%"
            h="30px"
            w="150px"
            fontSize={"12"}
            colorScheme={"green"}
          >
            GO TO HOME
          </Button>
        </div>
      </div>
    );

}