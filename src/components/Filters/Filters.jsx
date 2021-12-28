import React from 'react';
import FilterByName from './FilterByName/FilterByName';
import FiltersByNumbers from './FiltersByNumbers/FiltersByNumbers';

export default function Filters() {
  return (
    <form>
      <FilterByName />
      <FiltersByNumbers />
    </form>
  );
}
