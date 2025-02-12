import { createContext, useContext, useState } from "react";

const cartContext = createContext({
  product: [],
  addToCart: () => {},
  handleClearCart: () => {},
  handleDcrementProduct: () => {},
  deleteProduct:()=> {},
});

export const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addToCart = (newProduct) => {
    const productExists = product.find((item) => item.id === newProduct.id);
    if (productExists) {
      setProduct(
        product.map((item) =>
          item.id === newProduct.id
            ? { ...productExists, quantity: productExists.quantity + 1 }
            : item
        )
      );
    } else {
      setProduct([...product, { ...newProduct, quantity: 1 }]);
    }
  };

   const deleteProduct =(prevProduct) =>{
    const productExists = product.find((item) => item.id === prevProduct.id);
    if(productExists){
      setProduct(product.filter((item) => item.id !== prevProduct.id))
    }
   }

  const handleDcrementProduct = (newProduct) => {
    const productExists = product.find((item) => item.id === newProduct.id);
    if (productExists) {
      if (productExists.quantity === 1) {
        setProduct(product.filter((item) => item.id !== newProduct.id));
      } else {
        setProduct(
          product.map((item) =>
            item.id === newProduct.id
              ? { ...productExists, quantity: productExists.quantity - 1 }
              : item
          )
        );
      }
    }
  };

  const handleClearCart = () => {
    setProduct([]);
  };

  return (
    <cartContext.Provider
      value={{ product, addToCart, handleClearCart, handleDcrementProduct, deleteProduct}}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(cartContext);
  return context;
};
