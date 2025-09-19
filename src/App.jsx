import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './Banner.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import ProductPanel from './ProductPanel.jsx';
import ProductDetails from './ProductDetails.jsx';
import Chat from './Chat.jsx';
import { CartContext } from './CartContext.jsx';

function Home() {
  return (
    <>
      <ShoppingCart />
      <ProductPanel />
      <Chat />
    </>
  );
}

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const contextValue = { cartTotal, setCartTotal };

  return (
    <BrowserRouter>
      <CartContext.Provider value={contextValue}>
        <div className="App">
          <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:prodid" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
