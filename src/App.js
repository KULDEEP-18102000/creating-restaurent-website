import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";
// import Meals from "./components/Meals/Meals";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {

  const [cart,setCart]=useState(false)

  const showCart=()=>{
    setCart(true)
  }

  const hideCart=()=>{
    setCart(false)
  }

  return (
    <CartProvider>
      {cart && <Cart hideCart={hideCart}/>}
      <Header showCart={showCart}/>
      <Summary/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
