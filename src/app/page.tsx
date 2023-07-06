'use client'

// React and Hooks
import React, { useContext, useState } from 'react'

// Components
import HeroBanner from '@/components/HeroBanner'
import News from '@/components/News'
import Link from 'next/link'

// Context
import { AuthContext } from '@/contexts/AuthContext'
import { BiLoaderAlt } from 'react-icons/bi'


export default function Home() {

  const { isAuthenticated } = useContext(AuthContext)
  const [redirecting, setRedirecting] = useState(false)

  return (

    <div className="mt-16 pb-12">
      <HeroBanner />

      {isAuthenticated ? <News /> : (
        <div className='flex flex-col justify-center items-center gap-4 w-4/5 h-52 mx-auto'>
          <h2 className='text-2xl text-center'>You need to be logged in to see the news!</h2>
          <Link
            href={'/signin'}
            className='bg-accent py-3 px-12 rounded-xl hover:bg-orange-600 hover:scale-105 duration-300'
            onClick={() => setRedirecting(true)}
          >
            {!redirecting ? 'Login' : <BiLoaderAlt className='animate-spin text-2xl mx-auto' />}
          </Link>
        </div>
      )}

    </div>
  )
}