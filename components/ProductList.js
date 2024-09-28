import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/slices/productSlice';

const ProductList = ({ search }) => {
  const dispatch = useDispatch();
  const { products, status, totalProducts } = useSelector((state) => state.product);
  const { selectedCategory, categories } = useSelector((state) => state.category);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    setSkip(0);
    dispatch(getProducts({ category: selectedCategory, search, skip: 0, limit: 10 }));
  }, [dispatch, selectedCategory, search]);

  useEffect(() => {
    if (skip > 0) {
      dispatch(getProducts({ category: selectedCategory, search, skip, limit: 10 }));
    }
  }, [dispatch, selectedCategory, search, skip]);

  const loadMore = () => {
    setSkip(prevSkip => prevSkip + 10);
  };

  const getCategoryName = (slug) => {
    const category = categories.find(cat => cat === slug);
    return category || slug;
  };

  if (status === 'loading' && products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="mt-4">
        {selectedCategory ? `Category: ${getCategoryName(selectedCategory)}` : 'All Products'}
        {search && ` - Search: "${search}"`}
      </h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            {product.title}
          </li>
        ))}
      </ul>
      {products.length < totalProducts && (
        <button className="btn btn-primary mt-3" onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default ProductList;
