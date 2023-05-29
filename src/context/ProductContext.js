import { createContext, useState, useEffect } from "react";
import { data } from "../data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  /**
   * @ // Path: src\context\ProductContext.js
   * get cart data from localStorage çekiyoruz
   * useEffect ile cart değiştiğinde localStorage güncelleniyor
   * @returns {Array} cartData
   */
  const getCartData = () => {
    const cartData = localStorage.getItem("cartData");
    return JSON.parse(cartData);
  };

  const [cart, setCart] = useState(getCartData());
  const [products, setProducts] = useState(data);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

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
