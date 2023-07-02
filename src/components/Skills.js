import React from 'react'



import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {

    AOS.init()
  
  return (
    <div id="skills">
    <div className='mx-8 bg-[#EAF6F6] rounded-3xl h-90 mt-8 md:h-[70%]'  >
        <div className='text-4xl text-[#141C3A] text-bold ml-8 md:text-6xl'>
            <div className=''>Skills</div>
        </div>
        <div className='flex flex-wrap justify-between'>
        <div className='w-[20%] ml-[10%] md:w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/html.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[10%] md:w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/js.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[10%] md:w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/nodejs.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[10%] mr-[10%] md:w-[10%] ml-[10%] mr-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/mongodb.png')} alt=""/>
        </div>
        
        <div className='w-[20%] ml-[1px] mt-2 md:w-[10%] ml-36 mt-7 ' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/cplus.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[6%] mt-2 md:w-[10%] ml-[12px] px-3  mt-7' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/react.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[9%] mt-2 md:w-[10%] ml-1 mt-7' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/github.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[2%] mt-2 md:w-[10%] ml-5 mt-7 mx-28' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/api.png')} alt=""/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Skills