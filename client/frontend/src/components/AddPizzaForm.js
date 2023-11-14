// src/components/AddPizzaForm.js
import React, { useState } from 'react';

const AddPizzaForm = ({ addPizza }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation, you can add more validation as needed
    if (!name || !price || !image) {
      alert('Please fill out all fields');
      return;
    }

    // Create a new pizza object
    const newPizza = {
      id: Date.now(), // You can use a more robust ID generation method
      name,
      price: `$${price}`,
      image, // Assuming image is a URL or base64 representation
    };

    // Pass the new pizza to the parent component's addPizza function
    addPizza(newPizza);

    // Clear the form fields
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pizza Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Pizza Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Pizza Image URL:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <button type="submit">Add Pizza</button>
    </form>
  );
};

export default AddPizzaForm;
