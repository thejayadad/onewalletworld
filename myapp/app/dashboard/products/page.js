
import ProductCard from '@/components/ProductList/ProductCard'
import ProductNav from '@/components/dashboard/ProductNav/ProductNav'
import Link from 'next/link'
import React from 'react'


export async function fetchProducts(){
    const res = await fetch('http://localhost:3000/api/product', {cache: 'no-store'})
  
    return res.json()
  }
  
  
  export default async function Home() {
    const products = await fetchProducts()
  
    return (
        <main>
        <ProductNav />
        {products?.length > 0 ? (
          <table className="min-w-full leading-normal mt-12">
            <thead>
              <tr>
                <th 
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >Image</th>
                <th 
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >Title</th>
                <th 
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >Price</th>
                      <th 
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >Update</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div
                    className='flex-shrink-0'
                    >
                    <img className="w-24" src={product.images} alt={product.title} />
                    </div>
                  </td>
                  <td 
                  className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >{product.title}</td>
                  <td 
                  className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >{product.price}</td>
                     <td 
                  className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <Link href={`/dashboard/products/${product._id}`}>Update</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>Products Loading</h3>
        )}
      </main>
    )
  }
  