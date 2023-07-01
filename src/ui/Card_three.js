import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card_three() {
  AOS.init()
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-8" data-aos="fade-up"  data-aos-delay="100">
    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
      <img
        src={require('../assets/todoapi.png')}
        alt="img-blur-shadow"
        layout="fill"
      />
    </div>
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        TODO API
      </h5>
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      An API used to create,update,delete and read task and documented using Swagger
      </p>
    </div>
    <div className="p-6 pt-0">
      <button
        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true" 
        onClick={(e)=>{window.location = "https://github.com/SHAKTHI-VEL/ToDoAPI_Swagger"}}
      >
        Github
      </button>
    </div>
  </div>
  )
}

export default Card_three