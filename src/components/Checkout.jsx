import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useCartContext } from "../Context/CartContext";
import { DeliveryMethods } from "./DeliveryMethods";
import { PaymentMethods } from "./PaymentMethods";

const Checkout = () => {
  const { product } = useCartContext();

  const totalPrice = product.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="container">
      <div className="grid xl:grid-cols-2  xl:grid-rows-2 gap-8 mt-5">
        <form action="">
          <h2 className="font-semibold text-[20px] pb-6">Delivery Details</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="block w-full rounded-lg outline-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                type="text"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Your email*
              </label>
              <input
                className="block w-full rounded-lg outline-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                type="email"
              />
            </div>
            <div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="select-country"
                >
                  Country*
                </label>
              </div>
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900">
                <option defaultValue>Pakistan</option>
                <option value="AS">Australia</option>
                <option value="FR">France</option>
                <option value="ES">Spain</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="select-country"
                >
                  City*
                </label>
              </div>
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900">
                <option defaultValue>Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Multan">Multan</option>
                <option value="Sialkot">Sialkot</option>
                <option value="Sheikhpura">Sheikhpura</option>
              </select>
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="phone"
              >
                Phone Number*
              </label>
              <input
                className="block w-full rounded-lg outline-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Post Code
              </label>
              <input
                className="block w-full rounded-lg outline-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                type="email"
              />
            </div>
          </div>
          <PaymentMethods/>
          <DeliveryMethods/>
        </form>

        <div className="flex-1 max-w-90 space-y-4 lg:mt-0 lg:w-full ">
          {/* {product.length >= 1 &&  */}
          <div className="  xl:col-span-1 mt-14 xl:row-start-1 xl:row-end-[-1] ">
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
                <p className="text-gray-900 mt-3">
                  ${totalPrice + 799 + 99}.00
                </p>
              </div>
              <div>
                <button className="hover:bg-accent bg-accentDark mt-2 text-white w-full p-2 rounded-lg">
                  Proceed to Payment
                </button>
              </div>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {" "}
                One or more items in your cart require an account.{" "}
                <a className="flex items-center w-fit gap-2 text-[16px] cursor-pointer text-accent underline hover:text-accentDark">
                  Sign in or create an account now.
                  <GoArrowRight size={20} />
                </a>
              </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
