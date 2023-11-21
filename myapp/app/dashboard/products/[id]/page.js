'use client'
import ProductNav from '@/components/dashboard/ProductNav/ProductNav'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SingleProduct = (ctx) => {
    const [productDetails, setProductDetails] = useState("")
    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`http://localhost:3000/api/product/${ctx.params.id}`, { cache: 'no-store' })
            const product = await res.json()

            setProductDetails(product)
       
        }
       fetchProduct()
    }, [ctx.params.id])
  return (
    <section>
        <ProductNav />
        <h2 className='text-center'>Single Product</h2>
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
            <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div
                    className='flex-shrink-0'
                    >
                    <img className="w-24" src={productDetails?.images} />
                    </div>
                  </td>
                  <td 
                  className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >{productDetails?.title}</td>
                  <td 
                  className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >{productDetails?.price}</td>
                     <td 
                  className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <Link className='mr-4' href={`/dashboard/products/edit/${ctx.params.id}`}>Edit</Link>
                    <button >Delete</button>
                  </td>
                </tr>
            </tbody>

        </table>
    </section>
  )
}

export default SingleProduct