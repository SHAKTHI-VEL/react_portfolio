import React from 'react'
import Card_one from '../ui/Card_one'
import Card_two from '../ui/Card_two'
import Card_three from '../ui/Card_three'



function Projects() {

  

  return (
    <div id="projects">
    <div className='mt-10 '>
    <div className='text-4xl ml-5 text-[#141C3A]'>
      Projects
    </div>
    <div className='flex flex-wrap mx-10 mt-5'>
    <Card_one />
    <Card_two/>
    <Card_three/>
</div>
</div>
</div>
  )
}

export default Projects