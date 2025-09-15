import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-20'>
        <div className="container px-[4.5rem]">
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold '> <span className='text-primary'>SomPNG</span> CAFE</h1>
            
                <div>
                    <GiHamburgerMenu className='text-3xl cursor-pointer' />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar