import { useReducer } from "react";

import cartContext from "./cart-context";

const cartDefaultState={
    items:[],
    totalAmount:0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    console.log(updatedItems)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
    console.log(updatedTotalAmount)
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return cartDefaultState;
};

const CartProvider=(props)=>{

    const [cartState,dispatchCartAction]=useReducer(cartReducer,cartDefaultState)

    const addItemToCartHandler = (item) => {
        console.log(item)
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

//   const cartContext={
//     items:cartState.items,
//     totalAmount:cartState.totalAmount,
//     addItem:addItemToCartHandler,
//     removeItem:removeItemFromCartHandler
//   }

return(
    <cartContext.Provider value={{cartState,addItemToCartHandler,removeItemFromCartHandler}}>
        {props.children}
    </cartContext.Provider>
)
}

export default CartProvider