import React, { useState } from 'react';
import { useFilters } from '../../../context/context';

const columnList = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const filtersList = ['maior que', 'menor que', 'igual a'];

export default function FiltersByNumbers() {
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filters, setFilters] = useFilters();
  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };
  const { filterByName } = filters;

  const handleClick = () => {
    setFilters({ filterByName,
      filterByNumericValues: { ...filter } });
  };

  return (
    <>
      <label htmlFor="columnsSelect">
        Coluna:
        <select
          id="columnsSelect"
          onChange={ handleChange }
          name="column"
          data-testid="column-filter"
        >
          {
            columnList.map((column) => (
              <option key={ column } value={ column }>{ column }</option>))
          }
        </select>
      </label>
      <label htmlFor="filtersSelect">
        Filtro de comparação:
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          {
            filtersList.map((comparison) => (
              <option key={ comparison } value={ comparison }>
                { comparison }
              </option>))
          }
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          onChange={ handleChange }
          id="value"
          name="value"
          defaultValue="0"
          data-testid="value-filter"
        />
      </label>
      <button type="button" onClick={ handleClick } data-testid="button-filter">
        Filtrar
      </button>
    </>
  );
}
