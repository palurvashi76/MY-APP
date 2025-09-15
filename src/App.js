import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './Banner';
import ShoppingCart from './ShoppingCart';
import ProductPanel from './ProductPanel';
import ProductDetails from './ProductDetails';
import Chat from './Chat';
import { CartContext } from './CartContext.js';

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const contextValue = { cartTotal, setCartTotal };

  return (
    <BrowserRouter>
      <CartContext.Provider value={contextValue}>
        <div className="App">
          <Banner />
          <Routes>
            {/* Route for the Home Page */}
            <Route
              path="/"
              element={
                <>
                  <ShoppingCart />
                  <ProductPanel />
                  <Chat />
                </>
              }
            />
            {/* Route for the Product Details Page */}
            <Route path="/product/:prodid" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;