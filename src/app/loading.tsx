'use client'
import React from 'react'
import IsLoading from '@/components/IsLoading'


export default function Loading() {
    return (
        <div className='h-screen flex items-center'>
            <IsLoading />
        </div>
    )
}