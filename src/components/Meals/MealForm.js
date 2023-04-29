 import classes from './MealForm.module.css'

 function MealForm(){

    return(
        <form className={classes.form}>
            <label>Amount</label>
            <input type="number" min={1} max={5} step={1} defaultValue={1}/>
            <br/>
            <button>+Add</button>
        </form>
    )
 }

 export default MealForm