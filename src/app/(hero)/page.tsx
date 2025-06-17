import Image from 'next/image'
import React from 'react'
import homeSrc from "../../../public/home.jpg"
import Hero from '../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home"
}

export default function Page() {
  return (
    // <div className='h-screen relative'>
    //   <div className='absolute inset-0 -z-10'>
    //     <Image src={homeSrc} fill style={{objectFit: 'cover'}} alt="Home Image"/>
    //     <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
    //   </div>
    //   <div className='flex justify-center pt-48'>
    //     <h1 className="text-white text-6xl">Karayaylak Glacier</h1>
    //   </div>
    // </div>
    <Hero imgUrl={homeSrc} altTxt='Home Image' content='Karayaylak Glacier111'/>
  )
}
