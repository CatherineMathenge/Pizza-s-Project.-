// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import AddPizzaForm from './AddPizzaForm';
import PizzaList from './PizzaList';
import Login from './Login';
import Signup from './Signup';

const Dashboard = ({ loginUser, signupUser, isAuthenticated, addPizza }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [availablePizzas, setAvailablePizzas] = useState([
    { id: 1, name: 'Margherita', price: '$10.99' },
    { id: 2, name: 'Pepperoni', price: '$12.99' },
  ]);

  useEffect(() => {
    // Fetch additional pizzas from the server or an API when the user logs in
    // You can replace this with actual fetch logic
    if (isAuthenticated) {
      // Example: Fetch pizzas from an API endpoint
      // fetch('https://api.example.com/pizzas')
      //   .then(response => response.json())
      //   .then(data => setAvailablePizzas(data));
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h2>Dashboard</h2>
      {isAuthenticated ? (
        <>
          <AddPizzaForm addPizza={addPizza} />
          <PizzaList pizzas={availablePizzas} />
        </>
      ) : (
        <>
          {showLogin ? (
            <Login loginUser={loginUser} />
          ) : (
            <Signup signupUser={signupUser} />
          )}
          <button onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
