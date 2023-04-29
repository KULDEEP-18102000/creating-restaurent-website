import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";
// import Meals from "./components/Meals/Meals";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <div>
      <Cart/>
      <Header/>
      <Summary/>
      <Meals/>
    </div>
  );
}

export default App;
