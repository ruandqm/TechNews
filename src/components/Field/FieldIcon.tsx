import React, { ReactNode } from 'react'
import ctl from '@netlify/classnames-template-literals'


interface iFieldIconProps {
    icon: ReactNode,
    position: 'left-0' | 'right-0',
    action?: () => void,
    custom?: string
}

export const FieldIcon = ({ icon, position, action, custom }: iFieldIconProps) => {

    const iconPosition = position

    const handleClick = () => {
        action ? action() : null
    }

    return (
        <div className={ctl(`
             inline-flex 
             items-center 
             justify-center 
             absolute 
             ${iconPosition}
             top-0 
             h-full w-10 
             text-gray-400
             text-xl 
             ${custom}
             `)}
            onClick={() => handleClick()}
        >
            {icon}
        </div>
    )
}