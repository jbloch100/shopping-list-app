import React, { createContext, useContext, useState } from 'react';

interface ListContextType {
  items: string[];
  addItem: (item: string) => void;
  removeItem: (index: number) => void;
}

const ListContext = createContext<ListContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {}
});

export const ListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => setItems([...items, item]);
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));

  return (
    <ListContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
