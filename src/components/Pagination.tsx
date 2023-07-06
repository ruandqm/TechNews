import React from 'react'
import { Dispatch, SetStateAction } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

interface iPaginationProps {
    totalPages: number
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>
}

export default function Pagination({ totalPages, currentPage, setCurrentPage }: iPaginationProps) {
    return (
        <div className='flex justify-center gap-10 text-xl'>
            {currentPage > 1 && (
                <button onClick={() => setCurrentPage(currentPage - 1)}>
                    <MdNavigateBefore className='hover:scale-150 duration-300' />
                </button>
            )}

            <span>{currentPage}</span>

            {currentPage < (totalPages / 20) && (
                <button onClick={() => setCurrentPage(currentPage + 1)}>
                    <MdNavigateNext className='hover:scale-150 duration-300' />
                </button>
            )}

        </div>
    )
}