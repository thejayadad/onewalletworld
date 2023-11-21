'use client'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({product: {title, desc, price, images, _id}}) => {
  return (
  <Link href={`/dashboard/products/${_id}`}>
    <img src={images} alt='pic' />
    <span>{title}</span>
    <p>{price}</p>
  </Link>
  )
}

export default ProductCard