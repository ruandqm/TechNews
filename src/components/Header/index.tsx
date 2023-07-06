'use client'

import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import Navigation from './navigation'
import Link from 'next/link'


export default function Header() {

    const [open, setOpen] = useState(false)

    const Links = [
        { name: 'Home', link: '/' },
        { name: 'Sign In', link: '/signin' },
        { name: 'Sign Up', link: '/signup' },
    ]


    return (
        <header className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-zinc-950 py-4 md:px-10 px-7'>

                <Link href={'/'}>
                    <div className='font-bold text-2xl cursor-pointer flex items-center text-zinc-50'>
                        <span>Tech</span>
                        <span className='text-accent'>News</span>
                    </div>
                </Link>

                <div onClick={() => setOpen(!open)} className='text-3xl text-zinc-50 absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <MdClose /> : <MdMenu />}
                </div>
                <Navigation open={open} links={Links} />
            </div>
        </header>
    )
}