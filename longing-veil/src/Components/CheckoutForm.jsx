import React from "react";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import '../Styles/CheckoutForm.css'
import OrderSuccessBanner from "./OrderSuccessBanner";
 
const CheckoutForm = () => {

const reDirect = useNavigate()
//  const { isOpen, onOpen, onClose } = useDisclosure();
  const checkoutFormData = {

    FullName :'',
    Email:'',
    Address:'',
    City:'',
    State:'',
    ZipCode:'',


  }

  const [formData, setFormData] = useState(checkoutFormData);

  const HandleFormData = ({target})=>{

    const { name , value } = target;
    setFormData({ ...formData ,[name]:value});
console.log(formData);
    
  }


  return (
    <>
      <div className="checkout_logo">
        <img src="/Logo2.jpg" alt="" />
      </div>
      <div className="checkout_form_mother_container">
        <div className="col-50">
          <h3 className="billing_title">Billing Address</h3>
          <label htmlFor="fname">
            <i className="fa fa-user"></i> Full Name
          </label>
          <input
            onChange={HandleFormData}
            type="text"
            id="fname"
            name="FullName"
            placeholder="John M. Doe"
          />
          <label htmlFor="email">
            <i className="fa fa-envelope"></i> Email
          </label>
          <input
            onChange={HandleFormData}
            type="text"
            id="email"
            name="Email"
            placeholder="john@example.com"
          />
          <label htmlFor="adr">
            <i className="fa fa-address-card-o"></i> Address
          </label>
          <input
            onChange={HandleFormData}
            type="text"
            id="adr"
            name="Address"
            placeholder="542 W. 15th Street"
          />
          <label htmlFor="city">
            <i className="fa fa-institution"></i> City
          </label>
          <input
            onChange={HandleFormData}
            type="text"
            id="city"
            name="City"
            placeholder="New York"
          />
          <div className="row">
            <div className="col-50">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="State"
                onChange={HandleFormData}
                placeholder="NY"
              />
            </div>
            <div className="col-50">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                id="zip"
                name="ZipCode"
                onChange={HandleFormData}
                placeholder="10001"
              />
            </div>
          </div>
        </div>

        <div className="col-50">
          <h3>Payment</h3>
          <label htmlFor="fname">Accepted Cards</label>
          <div
            className="icon-container"
            style={{ display: "flex", gap: "20px" }}
          >
            <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
            <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
            <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
            <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
          </div>
          <label htmlFor="cname">Name on Card</label>
          <input
            type="text"
            id="cname"
            name="cardname"
            placeholder="John More Doe"
            onChange={HandleFormData}
          />
          <label htmlFor="ccnum">Credit card number</label>
          <input
            type="text"
            id="ccnum"
            name="cardnumber"
            placeholder="1111-2222-3333-4444"
            onChange={HandleFormData}
          />
          <label htmlFor="expmonth">Exp Month</label>
          <input
            type="text"
            id="expmonth"
            name="expmonth"
            placeholder="September"
            onChange={HandleFormData}
          />
          <div className="row">
            <div className="col-50">
              <label htmlFor="expyear">Exp Year</label>
              <input
                type="text"
                id="expyear"
                name="expyear"
                placeholder="2018"
                onChange={HandleFormData}
              />
            </div>
            <div className="col-50">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                onChange={HandleFormData}
                placeholder="352"
              />
            </div>
          </div>
        </div>

        <label htmlFor="checkbox">
          <input
            onChange={HandleFormData}
            type="checkbox"
            checked="checked"
            name="sameadr"
          />{" "}
          Shipping address same as billing
        </label>

        <input
          onClick={() => reDirect("/order_Successfull")}
          type="button"
          value="Continue to checkout"
          className="btn"
        />
      </div>
    </>
  );
};

export default CheckoutForm;
