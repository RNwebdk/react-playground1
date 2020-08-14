import React, { useState, useEffect } from 'react';
import './App.css';
import Pet from './rftrou/Pet';
import AddPetForm from './rftrou/AddPetForm';
import TimeArea from './rftrou/TimeArea';

function App() {
  const [pets, setPets] = useState([
    // { name: 'Meowsalot', species: 'Cat', age: '5', id: 123456789 },
    // { name: 'Barksalot', species: 'Dog', age: '3', id: 987654321 },
    // { name: 'Fluffy', species: 'Rabbit', age: '2', id: 123123123 },
    // { name: 'Purrsloud', species: 'cat', age: '1', id: 456456456 },
    // { name: 'Paws', species: 'dog', age: '6', id: 789789789 },
  ]);

  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem('examplePetData')) {
      setPets(JSON.parse(localStorage.getItem('examplePetData')));
    }
  }, []);

  // run every time the pet state changes and save to localstorage
  useEffect(() => {
    localStorage.setItem('examplePetData', JSON.stringify(pets));
  }, [pets]);
  return (
    <>
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => {
          return (
            <Pet
              id={pet.id}
              setPets={setPets}
              name={pet.name}
              species={pet.species}
              age={pet.age}
              key={pet.id}
            />
          );
        })}
      </ul>
      <TimeArea />
    </>
  );
}

export default App;
