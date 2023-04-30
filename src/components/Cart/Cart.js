// import { createPortal } from 'react-dom';
import Modal from "../UI/Modal"
import cartContext from "../../store/cart-context"
import { useContext } from "react"
import CartItem from "./CartItem"


function Cart(props){

    const ctx=useContext(cartContext)
    console.log(ctx)

    const cartItemRemoveHandler=(item)=>{
        console.log(item)
        ctx.removeItemFromCartHandler(item)
        console.log(item)
    }

    const cartItemAddHandler=(item)=>{
        console.log(item)
        for (let i = 0; i < ctx.cartState.items.length; i++) {
            const curr_item = ctx.cartState.items[i];
            if(curr_item.name===item.name){
                curr_item.quantity=parseInt(curr_item.quantity)+1
            }
        }
        console.log(item)
    }

    const cartItems=<ul>
        {ctx.cartState.items.map((item)=>
        <CartItem
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null,item)}
        onAdd={cartItemAddHandler.bind(null,item)}
        />
        )}
    </ul>

    const hideCart=()=>{
        props.hideCart()
    }

    

    return(
        <Modal>
                <div>
                {cartItems}
                <div>
                    <span>Total</span>
                    <span> {ctx.cartState.totalAmount}</span>
                </div>
                <div>
                    <button onClick={hideCart}>Close</button>
                    <button>Order</button>
                </div>
                </div>
            
        </Modal>

    )
}

export default Cart