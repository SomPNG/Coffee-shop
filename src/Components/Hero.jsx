import React, { useContext } from 'react'
import BgSlate from '../assets/bg-slate.png'
import BlackCoffeeImg from '../assets/black.png'
import Navbar from './Navbar'
import {motion} from "framer-motion"
import { FaFacebook, FaInstagram, } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AppContext } from '../Context/AppContext'


const bgImage = {
    backgroundImage : `url(${BgSlate})`,
    backgroundSize : 'cover',
    backgroundPosition : 'center',
    backgroundRepeat : 'no-repeat',
}

function Hero() {

    const {hamburger} = useContext(AppContext);
    
  return (
    <div style={bgImage}>
        <section className='min-h-[750px]  w-full'>
            <div className='container mx-auto'>

                <Navbar/>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                        
                        <motion.h1 
                        initial={{opacity:0,y:-100}}
                        animate={{opacity:1, y:0}}
                        transition={{type:"spring", stiffness:100, damping:10, delay:1}}
                        className='text-7xl font-bold leading-tight ml-14 '>Blxck Tumbler</motion.h1>
                        
                        <motion.div
                        initial={{opacity:0,y:100}}
                        animate={{opacity:1, y:0}}
                        transition={{type:"spring", stiffness:100, damping:10, delay:1.4}}
                        className='relative'>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'> Blxck Lifestyle Lovers</h1>
                                <h1  className='text-sm opacity-55 leading-loose'>
                                    Blxck lifestyle lovers embrace culture, style, 
                                    and empowerment—celebrating heritage, fashion, music,
                                     wellness, entrepreneurship, and community 
                                     pride while inspiring confidence, resilience,
                                      creativity.
                                </h1>
                            </div>

                            <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                        </motion.div>

                    </div>

                    <div className='relative'>
                        <motion.img 
                        initial={{opacity:0,scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{type:"spring", stiffness:100, damping:10, delay:0.7}}
                        src={BlackCoffeeImg}  className='relative z-40 h-[400px] md:h-[700px] img-shadow'/>
                        {/* orange ring */}
                        <motion.div
                        initial={{opacity:0,y:-100}}
                        animate={{opacity:1, y:0}}
                        transition={{type:"spring", stiffness:100, damping:10, delay:0.4}}
                        className='absolute top-24 -right-16 border-primary rounded-full h-[180px] w-[180px] z-10 border-[20px]'></motion.div>
                        
                        {/* big text section */}
                        <motion.div 
                        initial={{opacity:0,x:100}}
                        animate={{opacity:1, x:0}}
                        transition={{type:"spring", stiffness:100, damping:10, delay:0.7}}
                        className='absolute -top-20 left-[200px] z-[1]'>
                            <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none '>Blxck Tumbler</h1>
                        </motion.div>
                    </div>

                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                        <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14 '>Blxck Tumbler</h1>
                        <motion.div 
                        
                        initial={{opacity:0,y:100}}
                        animate={{opacity:1, y:0}}
                        transition={{type:"spring", stiffness:100, damping:10, delay:1.4}}
                        className='relative'>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Blxck Tumbler </h1>
                                <h1  className='text-sm opacity-55 leading-loose'>
                                    Blxck lifestyle lovers embrace culture, style, 
                                    and empowerment—celebrating heritage, fashion, music,
                                     wellness, entrepreneurship.
                                </h1>
                            </div>

                            <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
                        </motion.div>

                    </div>
                </div>


            </div>

            {hamburger ?
             (<motion.div
                initial={{x:"100%"}}
                whileInView={{x:0}}
                className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-darkGray/80 backdrop-blur-sm z-10'>
                    <div className='w-full h-full flex flex-col justify-center items-center  gap-6'>
                        <div className='w-[1px] h-[70px] bg-white'></div>
                        <div className='text-white text-2xl  cursor-pointer flex flex-col gap-6 items-center justify-center'>
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaXTwitter/>
                        </div>
                        <div className='w-[1px] h-[70px] bg-white'></div>
                    </div>
                </motion.div>)
                :
                (null)
            }
        </section>
    </div>
  )
}

export default Hero