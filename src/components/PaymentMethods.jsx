import React from 'react'
import { GrDeliver } from 'react-icons/gr'

export const PaymentMethods = () => {
  const handlePaymentMethodChange = (event) => {
    console.log(`Selected payment method: ${event.target.value}`);
  };
  return (
    <div className="space-y-4 mt-10">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      Payment Methods
    </h3>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-lg w-48 border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="credit-card"
              aria-describedby="credit-card-text"
              type="radio"
              name="payment-method"
              value=""
              className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              onChange={handlePaymentMethodChange}
            />
          </div>

          <div className="ms-4 text-sm">
            <label
              htmlFor="credit-card"
              className="font-medium leading-none text-gray-900 dark:text-white"
            >
             Credit Card
            </label>
            <p
              id="credit-card-text"
              className="my-1 text-xs font-normal text-gray-500 dark:text-gray-400"
            >
              Pay with your credit card
            </p>
            <img  src="card.png" alt="" />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800 w-48">
        <div className="flex items-start ">
          <div className="flex  items-center ">
            <input
              type="radio"
              name="payment-method"
              value=""
              className="h-4 w-4 border-gray-300 bg-white text-primary-600  dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 "
            />
          </div>

          <div className="ms-4 text-sm">
            <label
              htmlFor="fedex"
              className="font-medium leading-none text-gray-900 dark:text-white"
            >
             Payment on delivery
            </label>
            <p
              id="fedex-text"
              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
            >
             +$15 payment processing fee
            </p><GrDeliver className='my-1' size={20}/>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800 w-48">
        <div className="flex items-start ">
          <div className="flex  items-center ">
            <input
              type="radio"
              name="payment-method"
              value=""
              className="h-4 w-4 border-gray-300 bg-white text-primary-600  dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 "
            />
          </div>

          <div className="ms-4 text-sm">
            <label
              htmlFor="fedex"
              className="font-medium leading-none text-gray-900 dark:text-white"
            >
             Paypal account
            </label>
            <p
              id="fedex-text"
              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
            >
              Connect to your account
            </p>
            <img className='my-1' src="paypal.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
