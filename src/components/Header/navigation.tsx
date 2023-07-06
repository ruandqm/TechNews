import React, { useState, useEffect, useContext } from 'react'
import ctl from '@netlify/classnames-template-literals'
import { usePathname, useRouter } from 'next/navigation'
import { AuthContext } from '@/contexts/AuthContext'


interface iNavigationProps {
    open: boolean,
    links: { name: string, link: string }[],
}

export default function Navigation({ open, links }: iNavigationProps) {
    const router = useRouter()
    const pathName = usePathname()
    const [activeLink, setActiveLink] = useState(pathName)
    const { isAuthenticated, user, logout } = useContext(AuthContext)

    useEffect(() => {
        setActiveLink(pathName)
    }, [pathName])

    return (
        <nav
            className={ctl(`
                        md:items-center md:pb-0 md:static md:z-auto md:pl-0 md:w-auto
                        w-full pb-12 pl-9 
                        absolute left-0
                        bg-zinc-950
                        z-[-1]   
                        transition-all duration-500 ease-in 
                        ${open ? 'top-16 ' : 'top-[-490px]'}
                        `)}
        >

            <ul className='md:flex md:items-center'>

                {
                    links.map((link) => (
                        <li key={link.name} id={link.name} className='md:ml-8 text-xl md:my-0 my-7'>

                            {link.name === 'Sign In' && isAuthenticated ? (
                                <button className='bg-accent text-zinc-950 p-1 rounded-md'>
                                    {user.name}
                                </button>
                            ) : link.name === 'Sign Up' && isAuthenticated ? (
                                <button onClick={() => logout()}>Sair</button>
                            ) : (
                                <button
                                    onClick={() => router.push(link.link)}
                                    className={`${activeLink === link.link ? 'text-accent' : 'text-zinc-50'} hover:text-accent duration-500`}
                                >
                                    {link.name}
                                </button>
                            )}


                        </li>
                    ))
                }

            </ul>

        </nav>

    )
}