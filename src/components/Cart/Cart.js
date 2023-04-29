// import { createPortal } from 'react-dom';
import Modal from "../UI/Modal"

function Cart(props){
    const cartItems=<ul>
        {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item)=><li>{item.name}</li>)}
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
                    <span>35.62</span>
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