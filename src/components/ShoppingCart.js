import React, { useContext } from "react";
import { ScCartCheckout } from "./scParts";

// Components
import Item from "./ShoppingCartItem";
import { ProductContext } from "../context/ProductContext";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(ProductContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
