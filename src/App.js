import React from 'react';
import './App.css';
import CatNav from './CatNav';
import data from './data';
import StatePractice from './StatePractice';

function App() {
  // let navLists = data.map((navList, i) => {
  //   return <CatNav key={i} data={navList} />;
  // });
  // console.log(navLists);

  // return (
  //   <div className='App'>
  //     <div className='row'>
  //       <ul className='cat-nav center-align'>{navLists}</ul>
  //     </div>
  //   </div>
  // );

  return (
    <div className='App'>
      <StatePractice />
    </div>
  );
}

export default App;
