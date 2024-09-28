import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, setSelectedCategory } from '../store/slices/categorySlice';

const CategorySelector = ({ onSelect }) => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(setSelectedCategory(category));
    onSelect(category);
  };

  return (
    <select className="form-select mb-3" value={selectedCategory || ''} onChange={handleCategoryChange}>
      <option value="">All Categories</option>
      {Array.isArray(categories) && categories.map((category) => (
        <option key={category.slug} value={category.slug}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
