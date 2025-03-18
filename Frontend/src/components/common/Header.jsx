import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className=' border-b border-gray-200'>
        {/* topbar */}
        <Topbar/>
        {/* Navbar */}
        <Navbar/>
        {/* Cart */}
    </div>
  )
}

export default Header