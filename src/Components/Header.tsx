'use client'
import Image from 'next/image';

import Link from 'next/link';
import { navigation } from '@/Constants/data';

import ABS from '../Assets/ABS.png'
import {TiThMenu} from 'react-icons/ti'
import { useState } from 'react';
import {GrClose} from 'react-icons/gr'

const Header =()=>{
    const [show, setShow] = useState(false)
    console.log(show);
    
    return(
        <div className=" bg-transparent sticky top-0 w-full ">
            <div className=" relative max-w-screen-xl mx-auto  h-full items-center flex justify-between px-4 xl:px-0">
               <div>
                <Image src={ABS} alt='ABS ' className='w-16 h-16 '/>
               </div>
               <ul className='hidden md:flex gap-10 uppercase font-semibold text-sm text-zinc-500'>
              {
                navigation.map((item)=>(
                    <Link key={item.title} href={item.href}>
                    <li className='hover:text-zinc-200 cursor-pointer duration-200 relative group overflow-hidden '>{item.title} 
                    <span className='h-[1px] duration-300 w-full bg-zinc-500 inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 '/></li>
                    </Link>
                ))
              }
            
               </ul>
                <div onClick={()=>setShow(!show)} className='inline-flex md:hidden cursor-pointer text-zinc-500 hover:text-black'>
                     {
                        show ? <GrClose/>: <TiThMenu/>
                     }
                </div>
                {
                    show && <ul className=' absolute  left-0 w-full h-64 justify-center items-center   top-20  flex flex-col bg-zinc-700   gap-7 uppercase font-semibold text-sm text-zinc-400 '>
                    {
                      navigation.map((item)=>(
                          <Link key={item.title} href={item.href}>
                          <li className='hover:text-white cursor-pointer duration-200 relative group overflow-hidden '>{item.title} 
                          <span className='h-[1px] duration-300 w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 '/></li>
                          </Link>
                      ))
                    }
                  
                     </ul>
                }
            </div>
        </div>
    )
}

export default Header;