// src/components/PizzaOrder.js
import React, { useState } from 'react';

const PizzaOrder = () => {
  const [selectedPizzas, setSelectedPizzas] = useState([]);

  const handleAddToOrder = (pizza) => {
    setSelectedPizzas([...selectedPizzas, pizza]);
  };

  return (
    <div>
      <h2>Order Your Pizzas</h2>
      {/* Render pizza options and allow users to add to order */}
      {/* Use PizzaList component here */}
      {/* Display selected pizzas and total */}
    </div>
  );
};

export default PizzaOrder;
