import Card from './Card'
import Data from './Data'

const Category = () => {
  const {products} = Data
  return (
    <div className="container pt-16">
    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((item) => <Card key={item.id} item = {item}/>
    )}
    </div>
    </div>
  )
}

export default Category