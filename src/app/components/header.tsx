"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const linkData = [
    {name: "Performance", href: "/performance"},
    {name: "Reliability", href: "/reliability"},
    {name: "Scale", href: "/scale"},
]

// const accessLink = ["/", "/performance", "/reliability", "/scale"]

export default function Header() {
  const pathname = usePathname()
//   if (!accessLink.includes(pathname)) return null;
  return (
    <div>
        <div className="absolute w-full z-10">
          <div className="flex justify-between container mx-auto p-8 items-center">
            <Link className="text-3xl font-bold text-white" href="/">Home</Link>
            <div className="text-xl space-x-4 text-white">
              {
                linkData.map((link)=>(
                    <Link
                        key={link.name}
                        className={pathname === link.href ? 'text-white font-bold underline' : 'text-white hover:underline'} 
                        href={link.href}
                    >{link.name}
                    </Link>
                ))
              }  
              {/* <Link className={pathname === '/performance' ? 'text-purple-500' : ''} href="/performance">Performance</Link>
              <Link className={pathname === '/reliability' ? 'text-purple-500' : ''} href="/reliability">Reliability</Link>
              <Link className={pathname === '/scale' ? 'text-purple-500' : ''} href="/scale">Scale</Link> */}
            </div>
          </div>
        </div>
    </div>
  )
}
