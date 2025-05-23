import React from 'react';
import { useList } from '../context/ListContext';

const ShoppingListDisplay = () => {
  const { items, removeItem } = useList();

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => removeItem(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingListDisplay;
