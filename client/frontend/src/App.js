// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PizzaList from './components/PizzaList';
import PizzaOrder from './components/PizzaOrder';
import Dashboard from './components/Dashboard';
import AddPizzaForm from './components/AddPizzaForm';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pizzas, setPizzas] = useState([]);

  // Function to handle user login
  const loginUser = (userCredentials) => {
    // Implement logic to authenticate the user and set isAuthenticated to true
    setIsAuthenticated(true);
  };

  // Fetch pizzas when the component mounts
  useEffect(() => {
    // You need to implement this fetchPizzas function to get pizzas from your server
    const fetchPizzas = async () => {
      try {
        // Fetch pizzas from your server
        const response = await fetch('your_api_endpoint/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    // Call the fetchPizzas function
    fetchPizzas();
  }, []);

  // Function to handle adding a new pizza
  const addPizza = (newPizza) => {
    setPizzas((prevPizzas) => [...prevPizzas, newPizza]);
  };

  return (
    <div>
      <Header />
      <Dashboard isAuthenticated={isAuthenticated} loginUser={loginUser} />
      {isAuthenticated && (
        <>
          <AddPizzaForm addPizza={addPizza} />
          <PizzaList pizzas={pizzas} />
          <PizzaOrder />
        </>
      )}
    </div>
  );
};

export default App;
