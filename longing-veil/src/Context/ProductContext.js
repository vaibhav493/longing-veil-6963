
import React from "react";
import ReactDOM from "react-dom";
import { useRadioGroupContext } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState , createContext } from "react";


 export const productContext = createContext()

 function GetData(){

    return fetch(`https://hilarious-sari-tick.cyclic.app/Body-Lotion`);
 }

export default function ProductContextProvider({children}){

    const init_product_data ={
        isLoading:true,
        all_products :[],
        isError:false
    }
const [allProducts, setAllProducts] = useState(init_product_data);

useEffect(()=>{

    GetData()
    .then((res)=>res.json())
    .then((res)=>{setAllProducts({ ...allProducts ,all_products:res,isLoading:false});})
    .catch((err)=>console.log(err))

},[])


 
console.log(allProducts.all_products);
    return <productContext.Provider value={allProducts}>
        {
            children
        }
    </productContext.Provider>
}