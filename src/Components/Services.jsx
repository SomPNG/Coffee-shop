import React, { useContext } from 'react'
import { motion} from 'framer-motion'
import { AppContext } from '../Context/AppContext'

const Services = () => {
  const {coffeeCardsData} = useContext(AppContext);

  const cardVariants = {
    hidden: {opacity:0, y:20},
    visible:{
      opacity:1,
      y:0,
      transition: {
        type:"spring",
        stiffness:150,
        damping:10,
        ease: "easeInOut",
      }
    }
  }

  const containerVariants = {
    hidden: {opacity:1},
    visible:{
      opacity:1,
      y:0,
      transition: {
        delay:0.6,
        staggerChildren: 0.4,
      }
    },
  }

  return (
    <div className='container my-16 space-y-4 '>

        {/* header */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1, scale:1}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.2}}
            className='text-3xl font-bold text-lightGray'> 
                Fresh and <span className='text-primary'>Tasty Coffee</span> 
            </motion.h1>


            <motion.p
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1, scale:1}}
            transition={{type:"spring", stiffness:100, damping:10, delay:0.4}}
            className='text-sm opacity-50'>
                Freshly brewed coffee awakens the senses with its rich aroma, bold flavor, and smooth warmth. Each sip is a comforting blend of energy, taste, and pure satisfaction—deliciously irresistible, every single time.
            </motion.p>
        </div>

        {/* card section */}
        <motion.div variants={containerVariants} 
        initial="hidden"
        whileInView={"visible"}
        viewport={{amount:0.8}}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {
            coffeeCardsData.map((data)=>(
              <motion.div
              variants={cardVariants}
              
              className='text-center p-4 space-y-6' key={data.id}>
                <img className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' src={data.image} alt="" />
                <div className='space-y-2'>
                  <h1 className='text-2xl font-bold text-primary'>{data.title}</h1>
                  <p className='text-darkGray'>{data.desc}</p>
                </div>
              </motion.div>
            ))
          }
        </motion.div>

    </div>
  )
}

export default Services