'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product');
        const data = await response.json();
        setProducts(data.products || []); // Ensure products is an array or default to an empty array
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <section>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
