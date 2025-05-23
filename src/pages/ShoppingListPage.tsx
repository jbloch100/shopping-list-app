import React from 'react';
import ShoppingListInput from '../components/ShoppingListInput';
import ShoppingListDisplay from '../components/ShoppingListDisplay';

const ShoppingListPage = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Shopping List</h1>
    <ShoppingListInput />
    <ShoppingListDisplay />
  </div>
);

export default ShoppingListPage;
