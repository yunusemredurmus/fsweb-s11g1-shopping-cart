import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

const Item = (props) => {
  const { cart, setCart } = useContext(ProductContext);

  const removeProduct = () => {
    setCart(cart.filter((item) => item.id !== props.id));
  };



  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={removeProduct}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
