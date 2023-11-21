
import ProductCard from '@/components/ProductList/ProductCard'
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
      <div className='flex'>
      <Link href={'/dashboard/products/'}>
            All Products
        </Link>
        <Link href={'/dashboard/products/new'}>
            NewProduct
        </Link>
      </div>
     
      {products?.length > 0 
         ? products.map((product) => (
          <ProductCard key={product._id} product={product}/>
        )) : <h3>Products Loading</h3>}
     </main>
    )
  }
  