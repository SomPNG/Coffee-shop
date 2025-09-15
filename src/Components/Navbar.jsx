import React, { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaGithub } from "react-icons/fa";
import {motion} from "framer-motion"
import { AppContext } from '../Context/AppContext';
const Navbar = () => {

  const {hamburger,setHamburger} = useContext(AppContext);

  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-20'>
        <div className="container px-[4.5rem]">
            <div className='flex justify-between items-center'>
                <motion.h1
                initial={{opacity:0,y:-100}}
                animate={{opacity:1, y:0}}
                transition={{type:"spring", stiffness:100, damping:10, delay:0.2}}
                className=' text-2xl font-semibold flex gap-2 items-center'> <a className='flex gap-2 items-center' target='blank' href="https://github.com/SomPNG"><FaGithub/> <span className='text-primary'>SomPNG</span></a> CAFE</motion.h1>
            
                <motion.div
                initial={{opacity:0,y:-100}}
                animate={{opacity:1, y:0}}
                transition={{type:"spring", stiffness:100, damping:10, delay:0.2}}
                >
                    <GiHamburgerMenu onClick={()=>{
                      setHamburger(!hamburger)
                     }} className='text-3xl cursor-pointer' />
                </motion.div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar