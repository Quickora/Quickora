import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            quantity: 10,
            price: 300,
            image: "https://picsum.photos/200?random=1"
        },{
            productId: 2,
            name: "Jeans",
            size: "M",
            quantity: 8,
            price: 400,
            image: "https://picsum.photos/200?random=2"
        },
    ]
  return (
    <div>
        {cartProducts.map((product,index)=>(
            <div key = {index} className='flex items-start justify-between py-4 border-b'>
                <div className="flex items-start">
                    <img src={product.image} alt={product.name} className=' rounded-lg w-20 h-24 mr-4'/>
                    <div>
                        <h3>{product.name}</h3>
                        <p>
                            Size: {product.size}
                        </p>
                        <div className="items-center flex mt-2">
                            <button className='border rounded px-2 py-1 text-xl font-medium' >-</button>
                            <span className='mx-3'>{product.quantity}</span>
                            <button className='border rounded px-2 py-1 text-xl font-medium' >+</button>                            
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <h1 className=' font-bold'>${product.quantity*product.price}</h1>
                        <button>
                        <MdDeleteOutline className='w-6 h-6 text-black hover:text-red-600' />
                        </button>
                    </div>

                </div>
            </div>
        ))}
    </div>
  )
}

export default CartContent