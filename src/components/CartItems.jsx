import { IoMdAdd } from "react-icons/io";
import { useCartContext } from "../Context/CartContext";
import { HiMinusSm } from "react-icons/hi";
import { IoAddSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { OrderSummary } from "./OrderSummary";

const CartItems = () => {
  const {
    product,
    addToCart,
    handleDcrementProduct,
    handleClearCart,
    deleteProduct,
  } = useCartContext();

 

  return (
    <section className="container mt-8 bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 relative">
        <div className="flex justify-between">
          <h3 className="font-medium text-2xl mb-4 px-4">Shopping Cart</h3>
          {product.length >= 1 && (
            <button
              className="text-red-500 font-medium rounded-lg p-2 mb-2 flex border hover:scale-105 transition-transform border-gray-200 hover:border-gray-300"
              onClick={() => handleClearCart(product)}
            >
              Delete All
              <RiDeleteBin6Line className="mt-1 ml-1" />
            </button>
          )}
        </div>

        {product.length === 0 && (
          <div className="font-medium text-xl text-gray-500">
            No product added to Cart yet!
          </div>
        )}
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8 ">
          <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] gap-y-4 w-full font-medium max-sm:w-[90%] ">
            {product.map((item) => (
              <div
                className="flex justify-between items-center px-4 mb-6 max-md:flex-col border border-gray-200 hover:scale-105 transition-transform rounded-lg hover:border-gray-300 relative"
                key={item.id}
              >
                <div className="flex items-center gap-2 ">
                  <img
                    className="h-[200px] w-[200px] float-start py-2 rounded-2xl max-sm:h-[150px] max-sm:w-[150px] max-sm:object-cover"
                    src={item.img}
                  />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <div className="flex justify-between gap-4">
                    <p className="text-gray-400 cursor-pointer my-2">
                      ♡ Add to Favourites
                    </p>
                    <button
                      className="text-red-500"
                      onClick={() => deleteProduct(item)}
                    >
                      🞩 Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2.5">
                  <button
                    className="bg-gray-200 hover:text-white text-gray-500 hover:bg-green-500 rounded-sm"
                    onClick={() => addToCart(item)}
                  >
                    <IoAddSharp className="h-5 w-5" />
                  </button>
                  <h4 className="text-gray-500">{item.quantity}</h4>
                  <button
                    className="hover:bg-red-500 bg-gray-200 font-medium text-gray-500 hover:text-white rounded-sm"
                    onClick={() => handleDcrementProduct(item)}
                  >
                    <HiMinusSm className="h-5 w-5" />
                  </button>
                </div>
                <h4 className="max-md:my-3">
                  ${item.quantity * item.price}.00
                </h4>
              </div>
            ))}

          </div>
          
      <OrderSummary/>
        </div>
      </div>
      
    </section>
  );
};

export default CartItems;
