import React, { useContext } from "react";

const cartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:()=>{},
    removeItem:()=>{}
})

export default cartContext