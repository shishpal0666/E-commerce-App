import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import CategorySelector from '../components/CategorySelector';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { setSelectedCategory } from '../store/slices/categorySlice';
import { getProducts } from '../store/slices/productSlice';



const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const { category, search: querySearch } = router.query;
    if (category) {
      dispatch(setSelectedCategory(category));
    }
    if (querySearch) {
      setSearch(querySearch);
    }
    dispatch(getProducts({ category, search: querySearch, skip: 0, limit: 10 }));
  }, [router.query, dispatch]);

  const updateQueryParams = (category, searchTerm) => {
    const query = {};
    if (category) query.category = category;
    if (searchTerm) query.search = searchTerm;
    router.push({ pathname: '/', query }, undefined, { shallow: true });
  };

  const handleCategorySelect = (category) => {
    updateQueryParams(category, search);
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    updateQueryParams(router.query.category, searchTerm);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">E-commerce App</h1>
      <CategorySelector onSelect={handleCategorySelect} />
      <SearchBar onSearch={handleSearch} />
      <ProductList search={search} />
    </div>
  );
};

export default Home;
