

const Card = ({item}) => {
  return ( 
  <div className="border border-gray-200 hover:scale-105 transition-transform rounded-lg hover:border-gray-300">
    <div className='flex justify-between items-center p-6' key={item.id}>
      <div className="space-y-4">
      <h3 className='font-medium text-xl'>{item.name}</h3>
      <p className='text-gray-500'>{item.count}</p>
      </div>
  <img className="w-[100px] h-[100px] object-cover rounded-full" src={item.img} alt={item.name} />
</div>
  </div>
  )
}

export default Card