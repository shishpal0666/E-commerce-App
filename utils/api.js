import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const fetchCategories = async () => {
  return await axios.get(`${BASE_URL}/products/categories`);
};

export const fetchProducts = async (category, search, skip = 0, limit = 10) => {
  let url = `${BASE_URL}/products`;
  const params = new URLSearchParams({
    limit: limit.toString(),
    skip: skip.toString(),
  });

  if (category && !search) {
    url += `/category/${category}`;
    url += `?${params.toString()}`;
  } else if (search) {
    url += `/search?q=${search}`;
    search = '';
  } else {
    url += `?${params.toString()}`;
  }

  // console.log(url);
  return await axios.get(url);
};
