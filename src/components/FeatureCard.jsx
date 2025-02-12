import React from 'react'

export const FeatureCard = ({item}) => {
  return (
    <div className='flex items-center gap-4'>
      <div className="bg-gray-300 w-[50px] h-[50px] text-accentDark text-[24px] grid place-items-center rounded-full ">
        {item.icon}
      </div>
      <div>
        <h3 className='text-accent font-medium text-xl'>{item.title}</h3>
        <p className='text-gray-500 text-[14px]'>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}
