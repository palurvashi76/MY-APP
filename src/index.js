import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // 1. Import Provider
import store from './store'; // 2. Import the store we created

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3. Wrap the entire App in the Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);