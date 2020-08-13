import React, { useState } from 'react';
import './App.css';
import CatNav from './CatNav';
import data from './data';
import StatePractice from './StatePractice';
import TimeArea from './rftrou/TimeArea';
import LikeArea from './rftrou/LikeArea';
import Pet from './rftrou/Pet';
import AddPetForm from './rftrou/AddPetForm';

function App() {
  const [pets, setPets] = useState([
    { name: 'Meowsalot', species: 'Cat', age: '5', id: 123456789 },
    { name: 'Barksalot', species: 'Dog', age: '3', id: 987654321 },
    { name: 'Fluffy', species: 'Rabbit', age: '2', id: 123123123 },
    { name: 'Purrsloud', species: 'cat', age: '1', id: 456456456 },
    { name: 'Paws', species: 'dog', age: '6', id: 789789789 },
  ]);
  // const lis = [<li>Ole</li>, <li>Jens</li>, <li>Hans</li>];

  return (
    <>
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              species={pet.species}
              age={pet.age}
              key={pet.id}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
