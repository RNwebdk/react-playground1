import React from 'react';

function CatNav(props) {
  return (
    <li className='cat-link left valign-wrapper'>
      <i className='material-icons'>{props.data.icon}</i>
      {props.data.title}
    </li>
  );
}

export default CatNav;
