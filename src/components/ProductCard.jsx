import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai";
import { useCartContext } from "../Context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
     const {addToCart} = useCartContext();

     const addProductToCart =()=>{
      toast.success("Added to Cart")
      addToCart(item)
     }
  return (
    <div className="border border-gray-200 hover:scale-105 transition-transform rounded-lg hover:border-gray-300">
  <img className="h-[280px] w-[400px] object-cover content-center"  src={item.img} alt={item.name} />
      <div className="space-y-2 relative p-4">
        <div className="flex gap-[2px] text-[20px] text-yellow-400">
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiOutlineStar/>
        </div>
        <h3 className="font-medium">{item.name}</h3>
        <h3 className="font-medium text-2xl text-red-600">${item.price}</h3>
        <button className="absolute -top-1 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer" onClick={addProductToCart}>
          <AiOutlineShopping/> 
          </button>
      </div>
    </div>
  );
};

export default ProductCard;
