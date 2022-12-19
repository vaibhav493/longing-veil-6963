import { Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export default function CartProductCard({ data }) {
  const {
    productImage,
    productName,
    productCategory,
    productPrice,
    id,
    productOffer,
    quantity,
  } = data;

  const { update_quantity, delete_products } = useContext(CartContext);

  return (
    <>
      <div className="product_card_container">
        <div className="product_img_container">
          <img src={productImage} alt="" />
        </div>
        <div className="product_details_container">
          <div className="product_name">
            <p>{productName}</p>
          </div>
          <div className="product_category">
            <p> category : {productCategory}</p>
          </div>
          <div className="product_id">
            <p> product code : xzyd{id} </p>
          </div>
          <div className="product_price">
            <p> product price : ${productPrice}</p>
          </div>
          <div className="product_offer">
            <p>{productOffer}</p>
          </div>
        </div>
        <div className="product_price_container">
          <p>Price</p>
          <p className="price">${productPrice * quantity}</p>
        </div>

        <div className="product_quantity_changer_container">
          <p className="product_quantity">Quantity</p>
          <div className="quantity_button_cont"></div>
          <Button
            disabled={quantity === 1}
            onClick={() => {
              update_quantity(id, -1);
            }}
            w="20px"
            h="34px"
            bg="#CBD5E0"
            borderRadius="none"
          >
            <MinusIcon color={"black"} />
          </Button>
          <Button
            w="20px"
            h="34px"
            border={"1px solid grey"}
            borderRadius="none"
          >
            {quantity}
          </Button>
          <Button
            onClick={() => {
              update_quantity(id, +1);
            }}
            w="20px"
            h="34px"
            bg="#CBD5E0"
            borderRadius="none"
          >
            <AddIcon size="10px" color="black" />
          </Button>
        </div>
        <div className="delete_button_container">
          <div className="delete_button">
            <Button
              borderRadius="none"
              onClick={() => {
                delete_products(id);
              }}
            >
              <DeleteIcon color="#F56565" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
