import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1] ">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="/mixed-nuts-bowl.webp"
            alt="Hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl font-bold sm:text-4xl md:text-6xl ">
              Dried Fruits Best Healthy
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl pb-4 sm:text-4xl sm:pb-8">
              $23.18
            </div>
            <div className="flex items-center w-fit gap-4 px-4 py-2 text-[14px] cursor-pointer bg-accentDark hover:bg-accent text-white sm:px-6 sm:py-3 rounded-full">
              Shop Now <BsArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="relative">
          <img className="h-full w-full object-cover rounded-lg" src="/pizza-h.jpg" alt="" />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Crispy Yummy Pizza
            </h2>
            <p className="text-gray-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-xl sm:text-4xl pb-8">
              $10.15
            </div>
            <div className="flex items-center w-fit gap-4 px-4 py-2 text-[14px] cursor-pointer bg-accent hover:bg-accentDark text-white rounded-full">
              Shop Now <BsArrowRight size={20} />
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img className="h-full w-full object-cover rounded-lg" src="/chips.jpeg" alt="" />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Best Yummy Chips
            </h2>
            <p className="text-gray-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-xl sm:text-4xl pb-8">
              $8.25
            </div>
            <div className="flex items-center w-fit gap-4 px-4 py-2 text-[14px] cursor-pointer bg-accent hover:bg-accentDark text-white rounded-full">
              Shop Now <BsArrowRight size={20} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
