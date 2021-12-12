import React, { useState } from 'react';
import './App.css';
import AppContext from './context/context';
import Home from './pages/Home';

function App() {
  const [filters, setFilters] = useState(AppContext);
  const FILTERS_DEFAULT_VALUE = {
    filterByName: {
      name: '',
    },
  };
  return (
    <AppContext.Provider value={ [filters, setFilters, FILTERS_DEFAULT_VALUE] }>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
