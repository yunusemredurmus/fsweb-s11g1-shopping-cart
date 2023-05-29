import React, { useContext } from "react";
import { ScProduct } from "./scParts";
import { ProductContext } from "../context/ProductContext";

const Product = (props) => {
  const { cart, setCart } = useContext(ProductContext);

  const addItem = () => {
    setCart([...cart, props.product]);
  };

  return (
    <ScProduct>
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>
          <button onClick={addItem}>Add to cart</button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
