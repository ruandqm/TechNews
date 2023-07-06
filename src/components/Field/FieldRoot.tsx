import React, { ReactNode } from 'react'

interface iFieldRootProps {
    children: ReactNode
}

export const FieldRoot = ({ children }: iFieldRootProps) => {
    return (
        <div className='flex flex-col mb-8'>
            {children}
        </div>
    )
}