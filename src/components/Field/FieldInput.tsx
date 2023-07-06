import ctl from '@netlify/classnames-template-literals'
import React, { ReactNode } from 'react'

interface iFieldInputProps {
    type: 'text' | 'number' | 'email' | 'password',
    placeholder: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    name?: string
    children?: ReactNode
}

export const FieldInput = ({ type, placeholder, value, onChange, name, children }: iFieldInputProps) => {
    return (
        <div className="relative">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                className={ctl(`
                text-sm sm:text-base 
                text-zinc-950
                placeholder-zinc-500 
                px-10 py-2
                rounded-lg 
                border 
                border-gray-400 
                w-full  
                focus:outline-none 
                focus:border-fourth
                focus:border-accent
                `)}
            />

            {children}
        </div>
    )
}