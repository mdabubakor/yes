
"use client"
import React from 'react'
import Container from './Container'
import { exparience } from '@/Constants/data'

import Image from 'next/image';


interface props{
className?:"string";
}

const Exparience = () => {
  return (
    <div className='text-white'>
      <Container className=''>
        <div className='grid grid-cols-4 '>
            <div className=' flex flex-col items-center shadow-lg shadow-zinc-400 rounded-t-full'>
              
                 <a href="">
                 <p>
                    <Image src={exparience.image} alt='logo' className='w-full h-44'/>
                  </p>
                 </a>
                
             <h2 className='text-2xl font-semibold'>
                {
                   exparience.title
                   
                }
             </h2>
         
             <div className='p-5 '>
                <p className='text-lg'>{exparience.position}</p>
                <p className='font-semibold'>{exparience.duration}</p>
                <p className='text-zinc-500 text-xl'>{exparience.company}</p>
                <p>{exparience.description}</p>
             </div>
            </div>
            <div>Lija</div>
            <div>chad</div>
            <div>rayhan</div>
        </div>
      </Container>
    </div>
  )
}

export default Exparience
