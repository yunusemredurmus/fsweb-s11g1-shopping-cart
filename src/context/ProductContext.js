import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(data);

  const contextState = {
    cart,
    setCart,
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={contextState}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
