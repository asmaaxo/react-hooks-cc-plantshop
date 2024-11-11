import React from 'react';

function PlantPage({ plant }) {
  return (
    <div>
      <h1>{plant.name}</h1>
      <img src={plant.image} alt={plant.name} width="200" />
      <p>Price: ${plant.price}</p>
      <p>{plant.soldOut ? 'Sold Out' : 'Available'}</p>
    </div>
  );
}

export default PlantPage;
