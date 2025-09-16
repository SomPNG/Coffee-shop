import React from 'react'
import bannerImg from "../assets/coffee-cover.jpg"
import AppStoreImg from "../assets/website/app_store.png"
import PlayStoreImg from "../assets/website/play_store.png"
import {motion} from "framer-motion"

const BannerStyle = {
  backgroundImage : `url(${bannerImg})`,
  backgroundSize : 'cover',
  backgroundPosition : 'center',
  backgroundRepeat : 'no-repeat',
  height: "100%",
  width: "100%",
}

const AppBanner = () => {
  return (
    <div className='container mx-9 p-[1rem] my-14'>
      <div style={BannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl '>
        <div className='space-y-6 max-w-xl mx-auto'>
          
          <motion.h1
          initial={{opacity:0,y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{type:"spring", stiffness:100, damping:10, delay:0.4}}
          className='text-2xl text-center sm:text-4xl font-semibold'>Download the app</motion.h1>
          
          <motion.p 
          initial={{opacity:0,y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.2}}
          className='text-center sm:px-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, magnam!
          </motion.p>
          <div 
          
          className='flex justify-center items-center gap-4'>
            <a
            className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
            href="https://github.com/SomPNG" target='blank'>
            <motion.img 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.4}}
            src={AppStoreImg} alt="" />
            </a>
            <a
            className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
            href="https://github.com/SomPNG" target='blank'>
            <motion.img 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.4}}
            src={PlayStoreImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBanner