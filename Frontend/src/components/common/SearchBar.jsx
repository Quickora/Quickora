import React, { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
    const [SearchTerm, setSearchTerm] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const handleSearchToggle = () =>{
        setIsOpen(!isOpen);
    }
    const handleSearch = (e)=>{
        e.preventDefault();
        console.log("search Term:",SearchTerm)
        setIsOpen(false)
    }
  return (
    <div>
        {isOpen ? (<form onSubmit={handleSearch} className=' relative flex items-center justify-center w-full'>
            <input type="text" 
            placeholder='Search' 
            value={SearchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className=' border bg-gray-100 border-gray-500 rounded-xl px-4 py-2 focus:outline-none' />
            {/* Icon */}
            <button type='submit' className='absolute right-6 top-1'>
            <HiSearch className='h-6 w-6 mt-2 text-gray-500 hover:text-gray-900'/>
            </button>
            <button className='relative' type='button' onClick={handleSearchToggle}>
                <RxCross2 className='text-gray-500 hover:text-gray-900'/>
            </button>
        </form>):
        (
            <button onClick={handleSearchToggle}>
                <HiSearch className='h-6 w-6 mt-2 text-gray-700'/>
            </button>
        )}
    </div>
  )
}

export default SearchBar