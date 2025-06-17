// import Image from 'next/image'
import React from 'react'
import scaleSrc from "../../../../public/scale.jpg"
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Scale"
}

export default function Performance() {
  return (
    <div>
      <Hero imgUrl={scaleSrc} altTxt='Scale Image' content='Way to Kongur Basecamp'/>
    </div>
  )
}