import React from 'react'
import { useCartContext } from './Context/CartContext'

export const CartBadge = () => {
  const {product} = useCartContext();
  return (
    <div className={`absolute bg-red-500 text-white text-[14px] h-[25px] w-[24px] -right-2 -top-1 rounded-full grid place-items-center`}>
  {product.length}
    </div>
  )
}
