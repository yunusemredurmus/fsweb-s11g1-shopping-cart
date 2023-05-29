import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const { products, cart, setCart, setProducts } = useContext(ProductContext);

  const addItem = (item) => {
    setCart([...cart, item]);
    // verilen itemi sepete ekleyin
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
  );
}

export default App;
