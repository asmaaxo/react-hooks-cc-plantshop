import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, searchTerm, setPlants }) {
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeletePlant = (id) => {
    fetch(`https://react-hooks-cc-plantshop-24xk.onrender.com/plants/${id}`, {
      method: 'DELETE',
    })
      .then(() => setPlants(plants.filter((plant) => plant.id !== id)))
      .catch((error) => console.error('Error deleting plant:', error));
  };

  return (
    <ul>
      {filteredPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onDeletePlant={handleDeletePlant} setPlants={setPlants} />
      ))}
    </ul>
  );
}

export default PlantList; 

