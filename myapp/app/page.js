import ProductCard from '@/components/ProductList/ProductCard'
import ProductList from '@/components/ProductList/ProductList'
import Image from 'next/image'

export async function fetchProducts(){
  const res = await fetch('http://localhost:3000/api/product', {cache: 'no-store'})

  return res.json()
}


export default async function Home() {
  const products = await fetchProducts()

  return (
   <main className=''>
    homePage
   
    {products?.length > 0 
       ? products.map((product) => (
        <ProductCard key={product._id} product={product}/>
      )) : <h3>Products Loading</h3>}
   </main>
  )
}
