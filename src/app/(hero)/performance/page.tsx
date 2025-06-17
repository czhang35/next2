import Image from 'next/image'
import React from 'react'
import performanceSrc from "../../../../public/performance.jpg"
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Performance"
}

export default function Performance() {
  return (
    <div>
      <Hero imgUrl={performanceSrc} altTxt='Proformance Image' content='Jupiter from Hubble'/>
    </div>
  )
}
