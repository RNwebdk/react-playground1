import React, { useState, useEffect } from 'react';

const TimeArea = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  // setTimeout(() => {
  //   setTime((prev) => new Date().toLocaleString() + 1);
  // }, 1000);

  useEffect(() => {
    const interval = setInterval(
      () => setTime((prev) => new Date().toLocaleString() + 1),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return <p>The current time is {time} </p>;
};

export default TimeArea;
