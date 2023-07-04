import React from 'react'



import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {

    AOS.init()
  
  return (
    <div id="skills">
    <div className='mx-4 bg-[#EAF6F6]  h-100 mt-8  md:h-[70%] lg:rounded-3xl'  >
        <div className='text-4xl text-[#141C3A] text-bold ml-8 md:text-6xl mb-5'>
            <div className=''>Skills</div>
        </div>
        <div className='flex flex-wrap  justify-evenly'>
        <div className='w-[20%] ml-[10%] md:w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/html.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[10%] md:w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/js.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[10%] md:w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/nodejs.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[10%] mr-[10%] mt-3 md:w-[10%] ml-[10%] mr-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/mongodb.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[3%] md:w-[10%] ml-24 mt-5 ' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/cplus.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[10%] md:w-[10%] ml-[80px] mt-5' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/react.png')} alt=""/>
        </div>
        <div className='w-[20%] ml-[10%] md:w-[10%] mr-8 ml-5 mt-5' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/github.png')} alt=""/>
        </div>
        <div className='w-[20%] mr-2  md:w-[10%]  mt-5 mr-32 ml-2 ' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/api.png')} alt=""/>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Skills