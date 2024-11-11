import React, { useState } from 'react';

function PlantCard({ plant, onDeletePlant, setPlants }) {
  const [isSoldOut, setIsSoldOut] = useState(plant.soldOut || false);
  const [price, setPrice] = useState(plant.price);

  const handleSoldOutToggle = () => setIsSoldOut(!isSoldOut);

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    setPrice(newPrice);

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        setPlants((plants) =>
          plants.map((p) => (p.id === plant.id ? updatedPlant : p))
        );
      });
  };

  return (
    <li>
      <img src={plant.image} alt={plant.name} width="100" />
      <h2>{plant.name}</h2>
      <p>
        Price: $
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          step="0.01"
        />
      </p>
      <button onClick={handleSoldOutToggle}>
        {isSoldOut ? 'Sold Out' : 'Available'}
      </button>
      <button onClick={() => onDeletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;

