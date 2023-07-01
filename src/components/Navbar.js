import React from 'react'

function Navbar() {
  return (
    <div className='mt-5'>
        <div className='flex flex-row justify-between'>
            <div className='font-serif text-5xl ml-8 text-[#15A6A6]'>
                Shakthivel
            </div>
            <div className=''>
            <ul>
                <div className='hidden md:flex flex-wrap lg:flex flex-wrap'>
                <li className='font-semibold font-serif text-4xl mx-7 text-[#15A6A6] hover:text-[#9747FF]'><a href="#">Home</a></li>
                <li className='font-semibold font-serif text-4xl mx-7 text-[#15A6A6] hover:text-[#9747FF]'><a href="#skills">Skills</a></li>
                <li className='font-semibold font-serif text-4xl mx-7 text-[#15A6A6] hover:text-[#9747FF]'><a href="#about">About</a></li>
                <li className='font-semibold font-serif text-4xl mx-7 text-[#15A6A6] hover:text-[#9747FF]'><a href="#projects">Projects</a></li>
                <li className='font-semibold font-serif text-4xl mx-7 text-[#15A6A6] hover:text-[#9747FF]'><a href="https://drive.google.com/file/d/1ze0MnDrnrg3tfT3eVEJDIR187XGTOX4Y/view">Resume</a></li>
                </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar