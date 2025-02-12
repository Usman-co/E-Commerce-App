import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useCartContext } from "../Context/CartContext";
import { CartProduct } from "./CartProduct";
import { Link } from "react-router-dom";
// import CartItems from "./CartItems";

export const Cart = ({ setShowCart }) => {
  const { product } = useCartContext();
  return (
    <div
      className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
      onClick={() => setShowCart(false)}
    >
      <div className="max-w-[400px] w-full h-full bg-white absolute top-0 right-0 p-6 ">
        <RxCross1
          className="absolute top-0 right-0 m-6 cursor-pointer text-[24px]"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>

        <div className="mt-6">
          {product?.map((item) => (
            <CartProduct key={item.id} item={item} />
          ))}
        </div>
        
        <Link to={'/cart'}>
        <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mt-4 mb-2">
          View Cart
        </button>
        </Link>
        <Link to={'/checkout'}>
        <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark">
          CheckOut
        </button>
        </Link>
      </div>
    </div>
  );
};
