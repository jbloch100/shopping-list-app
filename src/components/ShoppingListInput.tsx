import React, { useState } from 'react';
import { useList } from '../context/ListContext';

const ShoppingListInput = () => {
  const [input, setInput] = useState('');
  const { addItem } = useList();

  const handleAdd = () => {
    if (input.trim()) {
      addItem(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ShoppingListInput;
