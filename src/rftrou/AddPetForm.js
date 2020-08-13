import React, { useState } from 'react';

const AddPetForm = (props) => {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets((prev) =>
      prev.concat({
        name: name,
        species: species,
        age: age,
        id: Date.now(),
      })
    );
    // clear the fields after adding
    setName('');
    setSpecies('');
    setAge('');
  }

  return (
    <form on onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          value={name}
        />
        <input
          type='text'
          onChange={(e) => setSpecies(e.target.value)}
          placeholder='Species'
          value={species}
        />
        <input
          type='text'
          onChange={(e) => setAge(e.target.value)}
          placeholder='Age in years'
          value={age}
        />
        <button>Add Pet</button>
      </fieldset>
    </form>
  );
};

export default AddPetForm;
