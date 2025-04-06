import React from 'react'
import { Link } from 'react-router-dom'
import category1 from "../../assets/category1.webp"
import category2 from "../../assets/category2.webp"

const CategoryCollection = () => {
  return (
    <section className=' py-16 px-4 lg:px-0'>
        <div className=' container mx-auto flex flex-col md:flex-row gap-8'>
            {/* Category 1 */}
            <div className='relative flex-1'>
            <img src={category1} alt="Category-1" className='w-full h-[700px] object-cover'/>
            <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Furniture</h2>
                <Link to="/collections/all?type=category1"
                className=" text-gray-900 underline">
                Shop Now
            </Link>
            </div>
            </div>
            {/* Category 2 */}
            <div className='relative flex-1'>
            <img src={category2} alt="Category-1" className='w-full h-[700px] object-cover'/>
            <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Electronics</h2>
                <Link to="/collections/all?type=category2"
                className=" text-gray-900 underline">
                    Shop Now
                </Link>
            </div>
            </div>
        </div>

    </section>
  )
}

export default CategoryCollection