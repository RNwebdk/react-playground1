import React from 'react';

const Pet = (props) => {
  const handleDelete = () =>
    props.setPets((prev) => prev.filter((pet) => pet.id !== props.id));

  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default Pet;
