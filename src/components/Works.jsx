import React from 'react'

export default function Works() {
    return (
        <div>
            <div className=' text-center'>
                <h2 className='text-5xl font-bold text-blue-500 py-4'>My Recent Works</h2>
                <h4 className=' text-base font-medium pb-4'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</h4>
                <div className=' flex justify-center gap-3 py-6'>
                    <div className=' bg-blue-300 px-4 py-2 rounded-3xl flex items-center gap-2'>
                        <span className=' hover:bg-blue-500 px-2 rounded-2xl py-1 cursor-pointer'>All</span>
                        <span className=' hover:bg-blue-500 px-2 rounded-2xl py-1 cursor-pointer'>UI/UX</span>
                        <span className=' hover:bg-blue-500 px-2 rounded-2xl py-1 cursor-pointer'>Branding</span>
                        <span className=' hover:bg-blue-500 px-2 rounded-2xl py-1 cursor-pointer'>Apps</span>
                    </div>
                </div>
            </div>
            <div>
                <h3>Date: - {Date()}</h3>
            </div>
        </div>
    )
}