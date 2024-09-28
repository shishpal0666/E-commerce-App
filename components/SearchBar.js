import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/slices/productSlice';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getProducts({ search, skip: 0, limit: 10 }));
    onSearch(search);
    setSearch(''); // Clear the search input
  };

  return (
    <form className="d-flex mb-3" onSubmit={handleSearch}>
      <input
        type="text"
        className="form-control me-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
