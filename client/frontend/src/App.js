// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import PizzaList from './components/PizzaList';
import PizzaOrder from './components/PizzaOrder';
import Dashboard from './components/Dashboard';
import AddPizzaForm from './components/AddPizzaForm';
import EditPizzaForm from './components/EditPizzaForm'; // Import EditPizzaForm component
import './App.css';

const App = () => {
  const [pizzas, setPizzas] = useState([
    { id: 1, name: 'Margherita', price: '$10.99' },
    { id: 2, name: 'Pepperoni', price: '$12.99' },
    // Add more pizza data as needed
  ]);

  // Function to add a new pizza
  const addPizza = (newPizza) => {
    setPizzas((prevPizzas) => [...prevPizzas, newPizza]);
  };

  // Function to edit an existing pizza
  const editPizza = (updatedPizza) => {
    setPizzas((prevPizzas) =>
      prevPizzas.map((pizza) => (pizza.id === updatedPizza.id ? updatedPizza : pizza))
    );
  };

  return (
    <div>
      <Header />
      <Dashboard addPizza={addPizza} />
      {/* Pass pizzas and editPizza to PizzaList */}
      <PizzaList pizzas={pizzas} editPizza={editPizza} />
      <PizzaOrder />
    </div>
  );
};

export default App;
