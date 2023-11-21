'use client'
import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('newProducts');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="flex justify-center mt-8">
        <button
          className={`${
            activeTab === 'newProducts' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 mx-2 rounded focus:outline-none`}
          onClick={() => handleTabClick('newProducts')}
        >
          New Products
        </button>
        <button
          className={`${
            activeTab === 'allProducts' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 mx-2 rounded focus:outline-none`}
          onClick={() => handleTabClick('allProducts')}
        >
          All Products
        </button>
        <button
          className={`${
            activeTab === 'singleProduct' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 mx-2 rounded focus:outline-none`}
          onClick={() => handleTabClick('singleProduct')}
        >
          Single Product
        </button>
        <button
          className={`${
            activeTab === 'editProduct' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 mx-2 rounded focus:outline-none`}
          onClick={() => handleTabClick('editProduct')}
        >
          Edit Product
        </button>
      </div>

      {activeTab === 'newProducts' && <div>New Products Content</div>}
      {activeTab === 'allProducts' && <div>All Products Content</div>}
      {activeTab === 'singleProduct' && <div>Single Product Content</div>}
      {activeTab === 'editProduct' && <div>Edit Product Content</div>}
    </section>
  );
};

export default Products;
