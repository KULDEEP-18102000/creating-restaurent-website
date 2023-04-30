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

  if(action.type=='REMOVE'){
    // console.log(action.item)
    // console.log(state.items)
    for (let i = 0; i < state.items.length; i++) {
        const curr_item = state.items[i];
        // console.log(curr_item)
        if(curr_item.name==action.item.name){
            // console.log(curr_item)
            if(action.item.quantity==1){
                const updatedItems=state.items.filter((item)=>{
                    return item.name!=action.item.name
                })
                let updatedTotalAmount=state.totalAmount-action.item.price
                if(updatedTotalAmount<0){
                    updatedTotalAmount=0
                }
                return {
                    items:updatedItems,
                    totalAmount:updatedTotalAmount
                }
            }
            else{
                // curr_item.quantity=curr_item.quantity-1
                curr_item.quantity=curr_item.quantity-1
            state.totalAmount=state.totalAmount-curr_item.price
            console.log(curr_item)
            console.log(state.items)
            }
            // curr_item.quantity=curr_item.quantity-1
            // state.totalAmount=state.totalAmount-curr_item.price
            // console.log(curr_item)
            // console.log(state.items)
        }
        
    }
    console.log(state.items)
    console.log(state.totalAmount)
    return {
        items: state.items,
        totalAmount: state.totalAmount
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

  const removeItemFromCartHandler = (item) => {
    console.log(item)
    dispatchCartAction({type: 'REMOVE', item: item});
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