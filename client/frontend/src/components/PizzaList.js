// PizzaList.js
import React from 'react';

const PizzaList = ({ pizzas, editPizza }) => {
  // Check if pizzas is defined and not null
  if (!pizzas) {
    return <p>No pizzas available</p>;
  }

  const handleEdit = (pizza) => {
    // Call the parent component's editPizza function
    editPizza(pizza);
  };

  return (
    <div>
      <h2>Available Pizzas</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name} - {pizza.price}
            {/* Add an edit button with an onClick handler */}
            <button onClick={() => handleEdit(pizza)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
