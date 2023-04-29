import {Fragment} from "react";
import Cart from '../../assets/cart.png'
import Meal from '../../assets/meals.jpg'
import classes from './Header.module.css'


function Header(props){

    const showCart=()=>{
        props.showCart()
    }

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <button onClick={showCart}>
                    <span><img style={{width:"12px", height:"12px",marginRight:"2px"}} src={Cart} alt="cart-image"/></span>
                    <span>Your cart</span>
                    <span>3</span>
                </button>
            </header>
            <div className={classes['main-image']}>
                <img src={Meal} alt="Meal-image"/>
            </div>
        </Fragment>
    )
}

export default Header