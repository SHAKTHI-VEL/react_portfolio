import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Hero() {


  return (
    <div className='flex flex-row justify-between h-full'>
    <>
    <div className='mt-20 ml-7 md:mt-28 ml-20'>
        <div>
        <div className='text-4xl font-mono text-semibold text-[#141C3A] md:text-6xl '>
            Hi! I AM
        </div>
        <div className='text-5xl font-mono text-semibold text-[#9747FF] md:text-6xl'>
            Shakthivel
        </div>
        <div className='text-5xl font-mono text-semibold text-[#9747FF] md:text-6xl'>
            Arumugam
        </div>
        <div className='text-5xl font-serif text-semibold text-[#141C3A] mt-16 md:mt-5'>
            I am into{' '}<span className=''><Typewriter
            words={['Backend Development', 'App Development', 'Engineering']}
            loop={false}
            cursor
            cursorStyle=''
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
            
          /></span>
        </div>
        <div>

        </div>
        </div>
    </div>
    </>
    
    <div className='w-90 h-90 rounded-full mt-10 mx-24 '>
        <img src={require('../assets/hero.png')} alt=""/>
    </div>
    
    </div>
  )
}

export default Hero