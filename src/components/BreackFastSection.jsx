import { useState } from "react";
import ProductCard from "./ProductCard";

const dairyData = [
  {
    id: 0,
    img: "milk.jpg",
    name: "Pure & Fresh Milk",
    price: 100,
  },
  {
    id: 1,
    img: "butter.webp",
    name: "Yummy Butter",
    price: 120,
  },
  {
    id: 2,
    img: "whiteEggs.jpg",
    name: "White & Brown eggs",
    price: 200,
  },
  {
    id: 3,
    img: "Coffee king.jpg",
    name: "King Coffee",
    price: 100,
  },
];

const fastFoodsData = [
  {
    id: 0,
    img: "Pizza.jpg",
    name: "Behari Pizza",
    price: 100,
  },
  {
    id: 1,
    img: "Chicken Naga.jpg",
    name: "Yummy Subburger",
    price: 120,
  },
  {
    id: 2,
    img: "Classic Margherita.jpg",
    name: "Classic Margherita Pizza",
    price: 200,
  },
  {
    id: 3,
    img: "topburger.jpg",
    name: "Yummy Topburger",
    price: 100,
  },
];

const snacksData = [
  {
    id: 0,
    img: "Potato-Chips.webp",
    name: "Crispy Potato Chips",
    price: 100,
  },
  {
    id: 1,
    img: "crackers.jpg",
    name: "Snack Crackers",
    price: 120,
  },
  {
    id: 2,
    img: "Cheese Nachos.jpg",
    name: "Nachos with cheese",
    price: 200,
  },
  {
    id: 3,
    img: "Tortilla.jpeg",
    name: "Tortilla chips",
    price: 100,
  },
];
const BreackFastSection = () => {
  const [category, setCategory] = useState("Eggs & Dairy");

  const handleCategoryToggle = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breackfast & Dairy</h3>
          <p className="text-gray-600 mt-2">
            Buy best quality Breackfast online at the best prices
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button
            className={`${
              category === "Eggs & Dairy"
                ? "feature_btn"
                : " text-gray-600 hover:text-accent "
            }`}
            onClick={() => handleCategoryToggle("Eggs & Dairy")}
          >
            Eggs & Dairy
          </button>
          <button
            className={`${
              category === "Fast Foods"
                ? "feature_btn"
                : " text-gray-600 hover:text-accent"
            } `}
            onClick={() => handleCategoryToggle("Fast Foods")}
          >
            Fast Foods
          </button>
          <button
            className={`${
              category === "Snacks"
                ? "feature_btn"
                : " text-gray-600 hover:text-accent"
            }`}
            onClick={() => handleCategoryToggle("Snacks")}
          >
            Snacks
          </button>
        </div>
      </div>

      <div className="grid gap-3 pt-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div>
          <img
            className="h-full w-full object-cover"
            src="/ketchup.jpg"
            alt=""
          />
        </div>

        {category === "Eggs & Dairy" && dairyData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
        {category === "Fast Foods" && fastFoodsData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
        {category === "Snacks" && snacksData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BreackFastSection;
