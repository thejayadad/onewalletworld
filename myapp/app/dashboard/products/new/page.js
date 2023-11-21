'use client'
import Link from 'next/link'
import React from 'react'

const NewProduct = () => {
  return (
    <section>
    <div className='flex justify-around'>
    <Link href={'/dashboard/products/'}>
            All Products
        </Link>
        <Link href={'/dashboard/products/new'}>
            NewProduct
        </Link>
    </div>
    </section>
  )
}

export default NewProduct