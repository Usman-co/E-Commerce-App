import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

export const OrderSummary = () => {
  const { product } = useCartContext();
  const totalPrice = product.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
  <div className="flex-1 max-w-90 space-y-4 lg:mt-0 lg:w-full">
    {product.length >= 1 && 
      <div className="  xl:col-span-2 xl:row-start-1 xl:row-end-[-1] ">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Order summary
          </p>
          <div className="flex justify-between gap-4 text-gray-400">
            Original price <p className="text-gray-700">${totalPrice}.00</p>
          </div>
          <div className="flex justify-between gap-4 text-gray-400">
            Savings <p className="text-green-700">-$299.00</p>
          </div>
          <div className="flex justify-between gap-4 text-gray-400">
            Store Pickup <p className="text-gray-700">$99.00</p>
          </div>
          <div className="flex justify-between gap-4 text-gray-400">
            Tax <p className="text-gray-700">$799.00</p>
          </div>
          <div className="flex justify-between text-gray-900 border-t border-gray-400">
            <p className="mt-3">Total</p>{" "}
            <p className="text-gray-900 mt-3">${totalPrice + 799 + 99}.00</p>
          </div>
          <Link to={"/checkout"}>
            <button className="hover:bg-accent bg-accentDark mt-2 text-white w-full p-2 rounded-lg">
              Proceed to Checkout
            </button>
          </Link>
          <div className="flex justify-between items-center w-fit gap-2">
            Or
            <Link
              to={"/"}
              className="flex items-center w-fit gap-2 text-[16px] cursor-pointer text-accent underline hover:text-accentDark"
            >
              Continue Shopping <GoArrowRight size={20} />
            </Link>
          </div>
  
          <div className=" flex-1 max-w-80 space-y-4 lg:mt-0 lg:w-full">
            <div className=" space-y-4 mt-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p> Do you have a voucher or gift card?</p>
              <input
                className="rounded-lg outline-none border border-gray-300 bg-gray-50 p-2.5 w-full"
                type="text"
              />
              <button className="hover:bg-accent bg-accentDark mt-2 text-white w-full p-2 rounded-lg">
                Apply Code
              </button>
            </div>
          </div>
        </div>
      </div>}
  </div>
  );
};
