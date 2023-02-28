import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Order = () => {
    const products = useLoaderData();
  return (
    <div>
      <h1>This is Order Page</h1>
        <h3>Order Items: {products.length}</h3>
    </div>
  )
}

export default Order
