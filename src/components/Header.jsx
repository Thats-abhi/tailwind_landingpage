import React from 'react'
import { FaBars } from "react-icons/fa6";
function Header() {
  return (
    <div className='flex flex-row flex-wrap justify-between'>
        <div className='flex items-center justify-center gap-2'>
            <img src="./assets/Logo.svg" alt="Logo" />
            <button className='bg-gradient-to-r from-orange-400 to-red-500 text-xs text-white rounded-2xl px-2.5 py-1.5'>Hoster is Hiring</button>
        </div>
        <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
          <li>
            <a href="#">Plans</a>
          </li>
          <li>
            <a href="#">Find Domain</a>
          </li>
          <li>
            <a href="#">My Hoster</a>
          </li>
        </ul>
        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
          <a href="#" className='text-gray-400'>Sign In</a>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>
        <div className='lg:hidden'>
        <FaBars />
        </div>

    </div> 
  )
}

export default Header
