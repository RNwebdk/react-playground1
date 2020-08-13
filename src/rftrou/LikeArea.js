import React, { useState } from 'react';

const LikeArea = () => {
  const [likeCount, setLikeCount] = useState(0);
  const increaseLikeHandler = () => {
    setLikeCount((prev) => prev + 1);
  };

  const decreaseLikeHandler = () => {
    setLikeCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  };

  return (
    <>
      <button onClick={increaseLikeHandler}>Increase likes</button>
      <button onClick={decreaseLikeHandler}>Increase likes</button>
      <h2>This page has been liked {likeCount} times.</h2>
    </>
  );
};

export default LikeArea;
