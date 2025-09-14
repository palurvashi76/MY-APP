import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div
        style={{
          background: 'linear-gradient(90deg, #4a90e2, #50e3c2)', // New gradient background
          color: 'white', // White text for better contrast
          padding: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1.1em', // Slightly increased font size
          borderRadius: '8px', // Added rounded corners
          margin: '10px', // Added some margin around the banner
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // A subtle shadow for depth
        }}
      >
        40% OFF on all Laptops! Free shipping on selected products!!
      </div>
    );
  }
}