import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

export const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  return (
    <FiltersContext.Provider
      value={ {
        filters, setFilters,
      } }
    >
      { children }
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export function useFilters() {
  const context = useContext(FiltersContext);
  const { filters, setFilters } = context;
  return [filters, setFilters];
}
