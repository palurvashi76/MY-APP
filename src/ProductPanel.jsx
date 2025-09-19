import React from 'react';
import Product from './Product.jsx';

function ProductPanel() {
  const products = [
    { id: 1, name: "MacBook Air M2", price: 114900, stock: 5 },
    { id: 2, name: "iMac 24-inch", price: 134900, stock: 3 },
    { id: 3, name: "MacBook Pro 14-inch M3", price: 169900, stock: 2 },
  ];

  const panelStyle = { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px', flex: 1 };
  const titleStyle = { width: '100%', textAlign: 'center', fontSize: '2em', marginBottom: '20px' };

  return (
    <div>
      <h2 style={titleStyle}>Product Panel</h2>
      <div style={panelStyle}>
        {products.map((p) => (
          <Product
            key={p.id}
            id={p.id} // <-- Pass the ID here
            name={p.name}
            price={p.price}
            initialStock={p.stock}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPanel;