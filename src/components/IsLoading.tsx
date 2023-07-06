import React from 'react'

export default function IsLoading() {
    return (
        <div className="w-full h-52 flex justify-center items-center">
            <div className='flex items-center justify-center min-h-screen'>
                <div className="bg-accent h-max w-max rounded-lg text-white font-bold hover:cursor-not-allowed duration-[500ms,800ms]">
                    <div className="flex items-center justify-center m-[10px]">
                        <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                        <div className="ml-2">
                            Please wait...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

