// SearchBar.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { setSearchTerm } from './redux/actions'; // Assuming you have an action to set the search ter
import { setSearchTerm } from '../redux/actions/productAction';

const SearchBar = () => {
  const [searchTerm, setSearchTermLocal] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <form onSubmit={handleSearch} style={styles.form}>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => {setSearchTermLocal(e.target.value);
            handleSearch(e)
        }}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Search
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: '8px',
    marginRight: '8px',
  },
  button: {
    padding: '8px 12px',
    background: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SearchBar;
