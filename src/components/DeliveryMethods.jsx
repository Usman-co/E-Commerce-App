import React from 'react'

export const DeliveryMethods = () => {
  
  const handlePaymentMethodChange = (event) => {
    console.log(`Selected payment method: ${event.target.value}`);
  };

  return (
    <div className="space-y-4 mt-10">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      Delivery Methods
    </h3>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-lg w-48 border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="dhl"
              aria-describedby="dhl-text"
              type="radio"
              name="delivery-method"
              value=""
              className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              onChange={handlePaymentMethodChange}
            />
          </div>

          <div className="ms-4 text-sm">
            <label
              htmlFor="dhl"
              className="font-medium leading-none text-gray-900 dark:text-white"
            >
             
              $15 - DHL Fast Delivery
            </label>
            <p
              id="dhl-text"
              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
            >
              Get it by Tommorow
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800 w-48">
        <div className="flex items-start ">
          <div className="flex  items-center ">
            <input
              type="radio"
              name="delivery-method"
              value=""
              className="h-4 w-4 border-gray-300 bg-white text-primary-600  dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 "
            />
          </div>

          <div className="ms-4 text-sm">
            <label
              htmlFor="fedex"
              className="font-medium leading-none text-gray-900 dark:text-white"
            >
              {" "}
              Free Delivery - FedEx{" "}
            </label>
            <p
              id="fedex-text"
              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
            >
              Get it by Friday, 13 Feb 2025
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800 w-48">
        <div className="flex items-start ">
          <div className="flex  items-center ">
            <input
              type="radio"
              name="delivery-method"
              value=""
              className="h-4 w-4 border-gray-300 bg-white text-primary-600  dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 "
            />
          </div>

          <div className="ms-4 text-sm">
            <label
              htmlFor="fedex"
              className="font-medium leading-none text-gray-900 dark:text-white"
            >
              Free Delivery - On Big Sale
            </label>
            <p
              id="fedex-text"
              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
            >
              Started from Sunday, 20 jan 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
