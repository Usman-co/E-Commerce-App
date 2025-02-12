import React from 'react'

export const CartProduct = ({item}) => {
  return (
    <div className='flex justify-between items-center'>
    <div className="flex items-center gap-4">
      <img className='h-[100px] w-[100px] mt-2' src={item.img} alt={item.name} />
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">{item.quantity} * ${item.price}</p>
      </div>
    </div>
    </div>
  )
}
