// EditPizzaForm.js
import React, { useState, useEffect } from 'react';

const EditPizzaForm = ({ pizza, editPizza }) => {
  const [name, setName] = useState(pizza.name);
  const [price, setPrice] = useState(pizza.price);
  const [image, setImage] = useState(pizza.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update pizza details
    const updatedPizza = {
      ...pizza,
      name,
      price,
      image,
    };
    editPizza(updatedPizza);
  };

  useEffect(() => {
    // Update form fields when pizza details change
    setName(pizza.name);
    setPrice(pizza.price);
    setImage(pizza.image);
  }, [pizza]);

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields similar to AddPizzaForm */}
      {/* ... */}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditPizzaForm;
