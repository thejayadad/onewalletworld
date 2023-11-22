'use client'
import React from 'react'
import Link from 'next/link'

const ProductNav = () => {
  return (
    <div className='flex justify-around gap-2'>
    <Link 
    className='px-3 py-4 bg-orange-500 w-full'
    href={'/dashboard/products/'}>
            All Products
        </Link>
        <Link
            className='px-3 py-4 bg-red-500 w-full'

        href={'/dashboard/products/new'}>
            NewProduct
        </Link>
        
    </div>
  )
}

export default ProductNav