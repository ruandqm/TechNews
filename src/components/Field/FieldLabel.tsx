import React from 'react'

export const FieldLabel = ({ text }: { text: string }) => {
    return (
        <label htmlFor='password' className='mb-1 text-xs sm:text-sm tracking-wide text-zinc-50'>{text}</label>
    )
}