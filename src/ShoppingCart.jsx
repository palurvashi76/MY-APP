import React, { useContext, useState, useRef, useEffect } from 'react';
import { CartContext } from './CartContext.jsx'; // Import the context

function ShoppingCart() {
  const { cartTotal, setCartTotal } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false); // State to show/hide payment form

  // Refs to directly access the input DOM elements
  const cardRef = useRef(null);
  const cvvRef = useRef(null);

  const handleCheckout = () => {
    setShowForm(true); // Show the payment form
  };

  const handlePayment = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    const cardNumber = cardRef.current.value;
    const cvv = cvvRef.current.value;

    if (cardNumber && cvv) {
      const last4 = cardNumber.slice(-4);
      alert(`Payment has been initiated for card ending with ${last4}`);
      setShowForm(false); // Hide the form
      setCartTotal(0); // Reset the cart
    } else {
      alert("Please enter both Card Number and CVV");
    }
  };

  return (
    <div style={styles.cart}>
      <h3 style={styles.title}>Shopping Cart</h3>
      <p style={{ fontSize: '1.1em' }}>Total items: {cartTotal}</p>

      {/* Show checkout button only if cart has items and form is hidden */}
      {cartTotal > 0 && !showForm && (
        <button onClick={handleCheckout} style={styles.checkoutButton}>
          Check Out Cart
        </button>
      )}

      {/* Show payment form if showForm is true */}
      {showForm && (
        <form onSubmit={handlePayment} style={{ marginTop: "15px" }}>
          <input
            type="text"
            placeholder="Card Number"
            ref={cardRef}
            style={styles.input}
            pattern="[0-9]{16}"
            title="Please enter a 16-digit card number"
            required
          />
          <input
            type="password"
            placeholder="CVV"
            ref={cvvRef}
            style={styles.input}
            pattern="[0-9]{3}"
            title="Please enter a 3-digit CVV"
            required
          />
          <button type="submit" style={styles.payButton}>Pay</button>
        </form>
      )}
    </div>
  );
}

// --- Styles ---
const styles = {
  cart: {
    border: "1px solid #e0e0e0", borderRadius: "12px", width: "280px",
    padding: "16px", position: "absolute", right: "20px", top: "120px",
    backgroundColor: "#ffffff", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif", textAlign: 'center'
  },
  title: {
    marginTop: '0', borderBottom: '1px solid #eee', paddingBottom: '10px'
  },
  checkoutButton: {
    padding: '8px 15px', fontSize: '16px', cursor: 'pointer',
    background: 'teal', color: 'white', border: 'none',
    borderRadius: '8px', marginTop: '10px'
  },
  input: {
    width: 'calc(100% - 20px)', padding: '8px 10px',
    marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc'
  },
  payButton: {
    width: '100%', padding: '10px', fontSize: '16px',
    cursor: 'pointer', background: 'green', color: 'white',
    border: 'none', borderRadius: '8px'
  }
};

export default ShoppingCart;