import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  // useSelector reads a value from the Redux store's state
  const count = useSelector((state) => state.count);

  // useDispatch gives us the function to send actions
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Redux Counter</h2>
      <h1 style={styles.countDisplay}>{count}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          style={styles.button}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          style={styles.button}
        >
          -
        </button>
      </div>
    </div>
  );
}

// --- Styles ---
const styles = {
  container: {
    textAlign: 'center', marginTop: '60px', fontFamily: 'sans-serif'
  },
  title: {
    fontSize: '24px', marginBottom: '15px'
  },
  countDisplay: {
    fontSize: '48px', margin: '20px 0', color: '#333'
  },
  button: {
    padding: '10px 20px', fontSize: '18px', margin: '0 10px',
    borderRadius: '8px', border: '1px solid #ccc',
    background: '#f4f4f4', cursor: 'pointer'
  }
};

export default Counter;