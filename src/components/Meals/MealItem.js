import classes from './MealItem.module.css'
import MealForm from './MealForm';


function MealItem(props){
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <MealForm name={props.name} price={props.price}/>
        </li>
    )
}

export default MealItem;