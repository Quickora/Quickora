import React from 'react'
import Hero from '../components/layout/Hero'
import CategoryCollection from '../components/products/CategoryCollection'
import NewArivals from '../components/products/NewArivals'
import ProductDetails from '../components/products/ProductDetails'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CategoryCollection/>
      <NewArivals/>
      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      <ProductDetails/>
    </div>
  )
}

export default Home