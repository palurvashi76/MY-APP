import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { prodid } = useParams(); // Gets 'prodid' from the URL

  const products = [
    { id: 1, name: "MacBook Air M2", price: 114900, description: "Lightweight and powerful laptop with Apple M2 chip.", manufacturer: "Apple" },
    { id: 2, name: "iMac 24-inch", price: 134900, description: "Sleek all-in-one desktop with Retina 4.5K display.", manufacturer: "Apple" },
    { id: 3, name: "MacBook Pro 14-inch M3", price: 169900, description: "Pro laptop with advanced M3 chip and Liquid Retina XDR display.", manufacturer: "Apple" },
  ];

  const product = products.find((p) => p.id === parseInt(prodid));

  if (!product) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product not found</h2>;
  }

  const styles = {
    detailsCard: {
      border: '2px solid black', padding: '20px', margin: '50px auto',
      maxWidth: '500px', textAlign: 'center', borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    }
  };

  return (
    <div style={styles.detailsCard}>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
      <p>Manufacturer: {product.manufacturer}</p>
    </div>
  );
}

export default ProductDetails;