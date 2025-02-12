import React, { useState } from 'react'
import { Navbar } from './components/Navbar';
import MobNavbar from './components/MobNavbar';
import HeroSection from './components/HeroSection';
import Category from './components/Category';
import FruitsSection from './components/FruitsSection';
import BreackFastSection from './components/BreackFastSection';
import BannerSection from './components/BannerSection';
import Newsletter from './components/Newsletter';
import Features from './components/Features';
import Footer from './components/Footer';
import { Cart } from './components/Cart';
import { CartContextProvider } from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CartItems from './components/CartItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';

const App = () => {
  const [showCart , setShowCart] = useState(false);
  
  return (
    <CartContextProvider>
      <BrowserRouter>
              <Navbar setShowCart={setShowCart} />
              <MobNavbar setShowCart={setShowCart} />
        <Routes>
          <Route path="/" element={
            <>
              <ToastContainer position="top-center" />
              <HeroSection />
              <Category />
              <FruitsSection />
              <BreackFastSection />
              <BannerSection />
              <Newsletter />
              <Features />
            </>
          } />
          
          <Route path="/cart" element={<CartItems />} />
          <Route path='/checkout' element ={<Checkout/>} />
        </Routes>
              <Footer />
              {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
