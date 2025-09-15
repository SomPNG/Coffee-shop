import React from 'react'
import BgSlate from '../assets/bg-slate.png'
import BlackCoffeeImg from '../assets/black.png'
import Navbar from './Navbar'

const bgImage = {
    backgroundImage : `url(${BgSlate})`,
    backgroundSize : 'cover',
    backgroundPosition : 'center',
    backgroundRepeat : 'no-repeat',
}

function Hero() {
  return (
    <div style={bgImage}>
        <section className='min-h-[750px] w-full'>
            <div className='container mx-auto'>

                <Navbar/>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                        <h1 className='text-7xl font-bold leading-tight ml-14 '>Black Tumbler</h1>
                        <div className='relative'>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'> Black Lifestyle Lovers</h1>
                                <h1  className='text-sm opacity-55 leading-loose'>
                                    Black lifestyle lovers embrace culture, style, 
                                    and empowerment—celebrating heritage, fashion, music,
                                     wellness, entrepreneurship, and community 
                                     pride while inspiring confidence, resilience,
                                      creativity.
                                </h1>
                            </div>

                            <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                        </div>

                    </div>

                    <div className='relative'>
                        <img src={BlackCoffeeImg}  className='relative z-40 h-[400px] md:h-[700px] img-shadow'/>
                        {/* orange ring */}
                        <div className='absolute top-24 -right-16 border-primary rounded-full h-[180px] w-[180px] z-10 border-[20px]'></div>
                        
                        {/* big text section */}
                        <div className='absolute -top-20 left-[200px] z-[1]'>
                            <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none '>Black Tumbler</h1>
                        </div>
                    </div>

                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                        <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14 '>Black Tumbler</h1>
                        <div className='relative'>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Black Tumbler </h1>
                                <h1  className='text-sm opacity-55 leading-loose'>
                                    Black lifestyle lovers embrace culture, style, 
                                    and empowerment—celebrating heritage, fashion, music,
                                     wellness, entrepreneurship.
                                </h1>
                            </div>

                            <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero