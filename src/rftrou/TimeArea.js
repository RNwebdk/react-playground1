import React, { useState } from 'react';

const TimeArea = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  setTimeout(() => {
    setTime((prev) => new Date().toLocaleString() + 1);
  }, 1000);
  return <p>The current time is {time} </p>;
};

export default TimeArea;
