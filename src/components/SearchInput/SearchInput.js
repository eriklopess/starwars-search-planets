import PropTypes from 'prop-types';
import React from 'react';

function SearchInput({ setSearch }) {
  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <div>
      <input type="text" onChange={ handleChange } data-testid="name-filter" />
    </div>
  );
}

SearchInput.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default SearchInput;
