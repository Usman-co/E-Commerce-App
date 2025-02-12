import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { CartBadge } from "../CartBadge";
import { Link } from "react-router-dom";


const MobNavbar = ({setShowCart}) => {
  return (
    <div className='sticky top-0 bg-white z-10'>
     <div className="container p-8 lg:hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <IoMenu size={30}/>
          <BsSearch size={24}/>
        </div>
        <Link to={'/'} className="text-4xl">
        <img src="logo.png" className="h-[100px] w-[100px] rounded-lg" alt="" />
        </Link>
        <div className="flex gap-4 text-[30px]">
          <AiOutlineUser/>
          <div className="relative cursor-pointer" onClick={()=> setShowCart(true)}>
            <AiOutlineShoppingCart/>
            <CartBadge/>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default MobNavbar