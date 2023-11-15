// src/components/PizzaList.js
import React from 'react';

const PizzaList = ({ pizzas, editPizza }) => {
  return (
    <div>
      <h3>Available Pizzas</h3>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          {pizza.editing ? (
            // Display edit form for user-added pizzas
            <div>
              <label>
                Pizza Name:
                <input
                  type="text"
                  value={pizza.name}
                  onChange={(e) => editPizza({ ...pizza, name: e.target.value })}
                />
              </label>
              <label>
                Pizza Price:
                <input
                  type="text"
                  value={pizza.price}
                  onChange={(e) => editPizza({ ...pizza, price: e.target.value })}
                />
              </label>
              <button onClick={() => editPizza({ ...pizza, editing: false })}>Save</button>
            </div>
          ) : (
            // Display pizza details with edit option
            <>
              {pizza.name} - {pizza.price}
              {pizza.userAdded && (
                <button onClick={() => editPizza({ ...pizza, editing: true })}>Edit</button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
