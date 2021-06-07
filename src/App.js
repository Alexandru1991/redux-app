import React from 'react';


import  ShoppingList from './components/shop/shop.js';

import dataSet from './assets/cleaners.json';
import ShoppingCart from './components/cart/cart.js';

function App() {
  
  return (
    <div className="App">
      <ShoppingList Items = {dataSet}/>
      <h2>Your Shopping Basket</h2>
      <ShoppingCart Items = {dataSet}/> 
    </div>
  );
}

export default App;
