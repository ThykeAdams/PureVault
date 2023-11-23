import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from '@/components/utility/Head'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Head title='Welcome'/>
      <div className='p-10 bg-background-secondary'></div>
    </div>
  )
}
