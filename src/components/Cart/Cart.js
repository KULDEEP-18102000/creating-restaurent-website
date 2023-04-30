// import { createPortal } from 'react-dom';
import Modal from "../UI/Modal"
import cartContext from "../../store/cart-context"
import { useContext } from "react"


function Cart(props){

    const ctx=useContext(cartContext)
    console.log(ctx)

    const cartItems=<ul>
        {ctx.cartState.items.map((item)=><li>{item.name}</li>)}
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