import React from 'react';
import ShoppingListPage from './pages/ShoppingListPage';
import { ListProvider } from './context/ListContext';

function App() {
  return (
    <ListProvider>
      <ShoppingListPage />
    </ListProvider>
  );
}

export default App;