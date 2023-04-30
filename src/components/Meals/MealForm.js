 import { useContext, useState } from 'react'
import classes from './MealForm.module.css'
import cartContext from '../../store/cart-context'


 function MealForm(props){

    const ctx=useContext(cartContext)

    // console.log(props)

    const [quantity,setQuantity]=useState(1)

    const increseQuantity=(e)=>{
        console.log(e.target.value)
        setQuantity(e.target.value)
    }

    const addItem=(e)=>{
        e.preventDefault()
        console.log(props.name)
        console.log(props.price)
        console.log(quantity)
        
        // console.log({name:props.name,price:props.price,quantity})
        ctx.addItemToCartHandler({name:props.name,price:props.price,quantity})
    }

    return(
        <form className={classes.form} onSubmit={addItem}>
            <label>Amount</label>
            <input value={quantity} onChange={increseQuantity} type="number" min={1} max={5} step={1}/>
            <br/>
            <button>+Add</button>
        </form>
    )
 }

 export default MealForm