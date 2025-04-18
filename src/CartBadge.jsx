import React from 'react'
import { useSelector } from 'react-redux';

export const CartBadge = () => {
  const {products} = useSelector((store) => store.products)

  return (
    <div className={`absolute bg-red-500 text-white text-[14px] h-[25px] w-[24px] -right-2 -top-1 rounded-full grid place-items-center`}>
  {products.length}
    </div>
  )
}
