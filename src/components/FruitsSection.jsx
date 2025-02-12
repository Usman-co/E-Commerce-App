import { useState } from "react"
import ProductCard from "./ProductCard"

const fruitsData = [
  {
  id:0, img:"grapes.jpg", name:"Fresh Grapes", price:100
},
{
id:1, img:"apples.jpeg", name:"Apples", price:120
},
{
id:2, img:"anar.webp", name:"Fresh Pomegranate", price:200
},
{
id:3, img:"pineapple.jpeg", name:"Healthy Pineapple", price:100
},
]

const driedFruitsData = [
  {
  id:0, img:"almond.webp", name:"Fresh Almonds", price:100
},
{
id:1, img:"cashews.jpeg", name:"Dried Cashews", price:120
},
{
id:2, img:"walnut.jpg", name:"Walnuts", price:200
},
{
id:3, img:"peanuts.jpeg", name:"Dried Peanuts", price:100
},
]

const vegetablesData = [
  {
  id:0, img:"Radish.webp", name:"Fresh Radishes", price:100
},
{
id:1, img:"potato-onion-tomato.webp", name:"Fresh Potatos, Onion & Tomatos", price:120
},
{
id:2, img:"Fresh Cabbage.jpeg", name:"Fresh Cabbage", price:200
},
{
id:3, img:"carrot.jpeg", name:"Fresh Carrots", price:100
},
]

const FruitsSection = () => {
  const [category, setCategory] = useState("Fruits");

  const handleCategoryToggle = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="container pt-16">
     <div className="lg:flex justify-between items-center">
      <div>
        <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
        <p className="text-gray-600 mt-2">
          Buy farm fresh fruits & vegetables online at the best prices
        </p>
      </div>

      <div className="space-x-4 mt-8 lg:mt-0">
        <button className={`${
              category === "Fruits"
                ? "feature_btn"
                : " text-gray-600 hover:text-accent "
            }`}
            onClick={() => handleCategoryToggle("Fruits")}>Fruits</button>
        <button className={`${
              category === "Vegetables"
                ? "feature_btn"
                : " text-gray-600 hover:text-accent "
            }`}
            onClick={() => handleCategoryToggle("Vegetables")}>
          Vegetables
        </button>
        <button className={`${
              category === "Dried Fruits"
                ? "feature_btn"
                : " text-gray-600 hover:text-accent "
            }`}
            onClick={() => handleCategoryToggle("Dried Fruits")}>
          Dried Fruits
        </button>
      </div>
     </div>

     <div className="grid gap-4 pt-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <div>
        <img className="h-96 w-auto" src="/fruitsSection.webp" alt="" />
      </div>

      {category === "Fruits" && fruitsData.map((item) => <ProductCard key={item.id} item={item} /> )}
      {category === "Dried Fruits" && driedFruitsData.map((item) => <ProductCard key={item.id} item={item} /> )}
      {category === "Vegetables" && vegetablesData.map((item) => <ProductCard key={item.id} item={item} /> )}
     </div>
    </div>
  )
}

export default FruitsSection