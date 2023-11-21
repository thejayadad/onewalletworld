'use client'
import React from 'react'
import Link from 'next/link'

const ProductNav = () => {
  return (
    <div className='flex justify-around'>
    <Link href={'/dashboard/products/'}>
            All Products
        </Link>
        <Link href={'/dashboard/products/new'}>
            NewProduct
        </Link>
        
    </div>
  )
}

export default ProductNav