// Dashboard.js
import React from 'react';
import AddPizzaForm from './AddPizzaForm';
import PizzaList from './PizzaList';

const Dashboard = ({ addPizza }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <AddPizzaForm addPizza={addPizza} />
      {/* Assuming you want to display the list here */}
      <PizzaList />
    </div>
  );
};

export default Dashboard;
