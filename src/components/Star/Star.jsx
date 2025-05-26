import { useState } from 'react';
import './style.css';

export const Star = ({ value, onSelect, glowing }) => {
  const handleClick = () => {
    onSelect(value);
  };

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  return <div className={starClass} onClick={handleClick}></div>;
};
