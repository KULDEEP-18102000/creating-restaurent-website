import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";
// import Meals from "./components/Meals/Meals";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {

  const [cart,setCart]=useState(false)

  const showCart=()=>{
    setCart(true)
  }

  const hideCart=()=>{
    setCart(false)
  }

  return (
    <div>
      {cart && <Cart hideCart={hideCart}/>}
      <Header showCart={showCart}/>
      <Summary/>
      <Meals/>
    </div>
  );
}

export default App;
