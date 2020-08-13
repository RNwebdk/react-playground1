import React from 'react';

const Pet = (props) => {
  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old
    </li>
  );
};

export default Pet;
