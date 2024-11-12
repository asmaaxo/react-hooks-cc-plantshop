import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://react-hooks-cc-plantshop-24xk.onrender.com/plants')
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error('Error fetching plants:', error));
  }, []);

  const handleAddPlant = (newPlant) => {
    fetch('https://react-hooks-cc-plantshop-24xk.onrender.com/plants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => setPlants([...plants, addedPlant]))
      .catch((error) => console.error('Error adding plant:', error));
  };

  const handleSearch = (term) => setSearchTerm(term);

  return (
    <div>
      <Header />
      <Search searchTerm={searchTerm} onSearchChange={handleSearch} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={plants} searchTerm={searchTerm} setPlants={setPlants} />
    </div>
  );
}

export default App;
