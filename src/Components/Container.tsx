"use client"
import React from 'react'


interface props {
    children: React.ReactNode | React.ReactNode[];
    className?:string ;
}

const Container = ({children , className}:props) => {
  return (  
    <div className={`${className} max-w-screen-xl mx-auto px-4 xl:px-0`}>
      {children}
    </div>
  )
}

export default Container
