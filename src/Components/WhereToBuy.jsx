import React, { useContext } from 'react'
import worldMap from "../assets/world-map.png"
import {motion} from 'framer-motion'
import { AppContext } from '../Context/AppContext';
const WhereToBuy = () => {

  const {formData,
        changeHandler,
        submitHandler} = useContext(AppContext);
  

  return (
    <div className="container  mx-10 my-36 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 place-items-center">

        {/* form */}
        <div className="space-y-8 w-full">
          <motion.h1 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.2}}
          className="text-4xl font-bold text-darkGray font-serif leading-snug">
            Buy our products from anywhere.
          </motion.h1>

          <form onSubmit={submitHandler} className="flex flex-col gap-6 w-full">
            <motion.div 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.4}}
            className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                className="input-style w-full"
                placeholder="Name"
                onChange={changeHandler}
                value={formData.Name}
                name="Name"
                required
              />
              <input
                type="email"
                className="input-style w-full"
                placeholder="Email"
                onChange={changeHandler}
                value={formData.Email}
                name="Email"
                required
              />
            </motion.div>

            <motion.div 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.6}}
            className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                className="input-style w-full"
                placeholder="Country"
                onChange={changeHandler}
                value={formData.Country}
                name="Country"
                required
              />
              <input
                type="text"
                className="input-style w-full"
                placeholder="Pincode"
                onChange={changeHandler}
                value={formData.Pincode}
                name="Pincode"
                required
              />
            </motion.div>

            <motion.button

            initial={{opacity:0,y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.8}}
              type="submit"
              className="primary-btn w-full sm:w-auto px-8 py-3 mx-auto sm:mx-0"
            >
              Order Now
            </motion.button>
          </form>
        </div>

        {/* world map */}
        <div className='col-span-2'>
             <motion.img 
             initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{type:"spring", stiffness:100, damping:10, delay:1}}
             src={worldMap} alt="" className='w-full sm:w-[500px] mx-auto' /> </div>
      </div>
    </div>
  )
}

export default WhereToBuy
