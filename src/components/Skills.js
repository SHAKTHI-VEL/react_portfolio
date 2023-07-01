import React from 'react'



import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {

    AOS.init()
  
  return (
    <div id="skills">
    <div className='mx-8 bg-[#EAF6F6] rounded-3xl h-[70%]'  >
        <div className='text-6xl text-[#141C3A] text-bold ml-8'>
            <div className=''>Skills</div>
        </div>
        <div className='flex flex-wrap justify-between'>
        <div className='w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/html.png')} alt=""/>
        </div>
        <div className='w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/js.png')} alt=""/>
        </div>
        <div className='w-[10%] ml-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/nodejs.png')} alt=""/>
        </div>
        <div className='w-[10%] ml-[10%] mr-[10%]' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/mongodb.png')} alt=""/>
        </div>
        
        <div className='w-[10%] ml-[10%] mt-7' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/cplus.png')} alt=""/>
        </div>
        <div className='w-[10%] ml-[6%] mt-7' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/react.png')} alt=""/>
        </div>
        <div className='w-[10%] ml-[5%] mt-7' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/github.png')} alt=""/>
        </div>
        <div className='w-[10%] ml-[8%] mt-7 mx-28' data-aos="fade-up"  data-aos-delay="100">
        <img src={require('../assets/api.png')} alt=""/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Skills