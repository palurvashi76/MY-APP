import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext.jsx'; // <-- Corrected import path

function Product({ id, name, price, initialStock }) {
  const [stock, setStock] = useState(initialStock);
  const { cartTotal, setCartTotal } = useContext(CartContext);

  const handleBuy = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setCartTotal(cartTotal + 1);
    }
  };

  const cardStyle = {
    border: '1px solid #e0e0e0', borderRadius: '12px', padding: '20px',
    margin: '10px', textAlign: 'center', width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)', display: 'flex',
    flexDirection: 'column', justifyContent: 'space-between'
  };
  const buttonStyle = {
    padding: '10px 20px', fontSize: '16px', cursor: 'pointer',
    backgroundColor: stock === 0 ? '#ccc' : '#007bff', color: 'white',
    border: 'none', borderRadius: '8px', marginTop: '10px'
  };

  return (
    <div style={cardStyle}>
      <div>
        <h3 style={{ fontSize: '1.2em', margin: '0 0 10px 0' }}>{name}</h3>
        <p>Price: ₹{price}</p>
        <p>Stock: {stock > 0 ? stock : <span style={{ color: "red" }}>Out of Stock</span>}</p>
      </div>
      <div>
        <button onClick={handleBuy} disabled={stock === 0} style={buttonStyle}>Buy</button>
        <div style={{ paddingTop: "10px" }}>
          <Link to={`/product/${id}`}>View Product Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Product;