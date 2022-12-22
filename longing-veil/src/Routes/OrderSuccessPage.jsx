
import OrderSuccessBanner from '../Components/OrderSuccessBanner';
import { useDisclosure } from "@chakra-ui/react";
import OrderSuccess from '../Other/OrderSuccsessModel';
import { useEffect } from 'react';
  
import React from 'react'



const OrderSuccessPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(()=>{
        onOpen()
    },[])
  return (
    <div>
      <OrderSuccess isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <OrderSuccessBanner />
      </OrderSuccess>
    </div>
  );
}

export default OrderSuccessPage;
