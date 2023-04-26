import classes from './Meals.module.css'
import MealItem from './MealItem';

const dummy_meals=[
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
      },
];


function Meals(){

    const meal_list=dummy_meals.map((meal)=><MealItem name={meal.name} description={meal.description} price={meal.price}/>)

    return(
        <section className={classes.meals}>
            {meal_list}
        </section>
    )
}

export default Meals;