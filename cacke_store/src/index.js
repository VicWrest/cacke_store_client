import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';
import BasketStore from './store/BasketStore';
import ReviewStore from './store/ReviewStore';
import ErrorStore from './store/ErrorStore';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore(),
    basket: new BasketStore(),
    review: new ReviewStore(),
    errors: new ErrorStore()
  }}>
    <App />
    </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
