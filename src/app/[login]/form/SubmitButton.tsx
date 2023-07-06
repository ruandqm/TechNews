import { AuthContext } from '@/contexts/AuthContext'
import React, { useContext } from 'react'
import { BiLoaderAlt } from 'react-icons/bi'

export default function SubmitButton({ text }: { text: string }) {

    const { validating } = useContext(AuthContext)

    return (
        <div className='text-center w-full'>
            <button
                type='submit'
                className={`bg-accent p-3 w-4/5 rounded-xl hover:bg-orange-600 hover:scale-105 duration-300 ${validating && 'hover:cursor-not-allowed'}`}
            >
                {!validating ? text : <BiLoaderAlt className='animate-spin text-2xl mx-auto' />}
            </button>
        </div>
    )
}