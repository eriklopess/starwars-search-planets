import React from 'react';
import { useFilters } from '../../../context/context';

export default function FilterByName() {
  const [filters, setFilters] = useFilters();
  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };
  return (
    <label htmlFor="filterByName">
      Search:
      <input
        type="text"
        id="filterByName"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </label>
  );
}
