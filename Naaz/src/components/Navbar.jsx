import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 font-medium'>
      <img src={assets.ran1} className='w-36' alt="Tennis Ball" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collections' className="flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>Contact Us</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.searchicon} className='w-8 curor-pointer' alt="" />
        <div className='group relative'>
            <img src={assets.searchicon} className='w-8 cursor-pointer' alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
        </div>
        <Link to='/cart' className='relative'>
            <img src={assets.searchicon} className='w-8 min-w-5' alt="" />
            <div className='absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center'>3</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
