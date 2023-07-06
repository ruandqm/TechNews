'use client'

// React and Hooks
import React from 'react'
import { useParams } from 'next/navigation'

// Components
import SignUpForm from './form/SignUpForm'
import SignInForm from './form/SignInForm'
import Link from 'next/link'


export default function Login() {

    const router = useParams()
    const loginView = router.login

    //Styles
    const activeViewStyle = 'bg-zinc-100 text-zinc-950'
    const buttonStyle = 'w-32 p-3 text-center duration-300 hover:bg-zinc-400'


    return (
        <div className='pb-12 h-screen flex justify-center items-center max-w-lg mx-auto'>
            <section className='bg-zinc-800 flex flex-col justify-center rounded-md p-8'>

                <div className='w-64 mx-auto rounded-md overflow-hidden bg-zinc-500 flex mb-8'>
                    <Link
                        className={`${buttonStyle} ${loginView === 'signin' && activeViewStyle}`}
                        href={'/signin'}
                    >
                        Sign In
                    </Link>

                    <Link
                        className={`${buttonStyle} ${loginView === 'signup' && activeViewStyle}`}
                        href={'/signup'}
                    >
                        Sign Up
                    </Link>

                </div>

                {loginView === 'signin' ? <SignInForm /> : <SignUpForm />}

            </section>
        </div>
    )
}