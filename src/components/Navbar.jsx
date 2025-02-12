import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartBadge } from "../CartBadge";
import { Link } from "react-router-dom";


export const Navbar = ({setShowCart}) => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <Link to={'/'} className="text-4xl font-medium">
          <img src="logo.png" className="h-[100px] w-[100px] rounded-lg" alt="" />
          </Link>
          <div className="relative w-full max-w-[600px]">
            <input className="bg-[#f2f3f5] border-none outline-none py-3 px-6 rounded-[30px] w-full" type="text" placeholder="Search products..." />
            <FiSearch className="absolute top-0 right-0 mt-3 mr-5 text-gray-500" size={20}/>      
          </div>
          <div className="flex gap-4">
            <div className="icon_wrapper">
            <AiOutlineUser/>
            </div>
            <div className="icon_wrapper relative cursor-pointer" onClick={()=> setShowCart(true)}>
            <AiOutlineShoppingCart />
            <CartBadge/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
