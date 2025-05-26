import { useState } from 'react';
import { Star } from '../Star/Star';
import './style.css';

// 7. Nyní využijeme stavu rating v komponentě Rating. Stačí si uvědomit, že například první hvězdička má svítit, když je hodnota rating větší nebo rovna 1. Takže můžeme napsat takovouto podmínku.Upravte podmínky u všech hvězdiček tak, aby svítily ve správnou chvíli. Zkuste si nastavit výchozí stav na různé hodnoty a vyzkoušejte, že se hvězdičky rozsvítí správně.

export const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleOnSelect = (selectedValue) => {
    setRating(selectedValue);
  };

  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        <Star value={1} onSelect={handleOnSelect} glowing={rating >= 1} />
        <Star value={2} onSelect={handleOnSelect} glowing={rating >= 2} />
        <Star value={3} onSelect={handleOnSelect} glowing={rating >= 3} />
        <Star value={4} onSelect={handleOnSelect} glowing={rating >= 4} />
        <Star value={5} onSelect={handleOnSelect} glowing={rating >= 5} />
      </div>
    </div>
  );
};
