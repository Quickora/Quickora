import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import CartContent from '../cart/CartContent';

const CartDrawer = ({drawerOpen,toggleCartDrawer}) => {
  return (
    <div className={
        `fixed top-0 right-0 w-3/4
        sm:w-1/2 md:w-[30rem] h-full bg-white 
        shadow-lg transform transition-transform duration-300 
        flex flex-col z-50 ${drawerOpen?"translate-x-0": "translate-x-full"}`}>
        {/* Close Button */}
        <div className='flex justify-end p-4'>
            <button onClick={toggleCartDrawer}>
                <RxCross2 className='h-6 w-6 text-gray-600'/>
            </button>
        </div>

        {/* Cart Content */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className='text-xl font-semibold mb-4'> Your Cart</h2>
          {/* Components for cart */}
          <CartContent/>
        </div>

        {/* Checkout Button */}
        <div className="sticky bottom-0 bg-white p-4">
          <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>Checkout</button>
          <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>Shipping, taxes, and discount codes calculated at checkout.</p>
        </div>
    </div>
  )
}

export default CartDrawer