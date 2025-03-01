import { MoveDownLeft } from 'lucide-react'
import React from 'react'

export default function Services() {
    return (
        <div className=' py-10'>
            <div className='text-center'>
                <h3 className=' font-bold text-6xl text-blue-500 py-3'>My Quality Services</h3>
                <p className=' font-medium text-lg'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                </p>
            </div>
            <div className='py-20'>
                <div className='flex justify-between items-center gap-2 hover:bg-blue-600 hover:cursor-pointer transition duration-700 ease-in-out py-12 px-10 rounded-md group'>
                    <div>
                        <h3 className=' text-xl font-bold group-hover:text-white'>01</h3>
                    </div>
                    <div>
                        <h3 className=' text-4xl font-bold group-hover:text-white'>Web Development</h3>
                    </div>
                    <div className=' w-[600px]'>
                        <p className=' text-base font-medium group-hover:text-white'>Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.</p>
                    </div>
                    <div>
                        <span><MoveDownLeft className=' group-hover:rotate-90 transition duration-700 ease-in-out' size={40} /></span>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2 hover:bg-blue-600 hover:cursor-pointer transition duration-700 ease-in-out py-12 px-10 rounded-md group'>
                    <div>
                        <h3 className=' text-xl font-bold group-hover:text-white'>02</h3>
                    </div>
                    <div>
                        <h3 className=' text-4xl font-bold group-hover:text-white'>Web Development</h3>
                    </div>
                    <div className=' w-[600px]'>
                        <p className=' text-base font-medium group-hover:text-white'>Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.</p>
                    </div>
                    <div>
                        <span><MoveDownLeft className=' group-hover:rotate-90 transition duration-700 ease-in-out' size={40} /></span>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2 hover:bg-blue-600 hover:cursor-pointer transition duration-700 ease-in-out py-12 px-10 rounded-md group'>
                    <div>
                        <h3 className=' text-xl font-bold group-hover:text-white'>03</h3>
                    </div>
                    <div>
                        <h3 className=' text-4xl font-bold group-hover:text-white'>Web Development</h3>
                    </div>
                    <div className=' w-[600px]'>
                        <p className=' text-base font-medium group-hover:text-white'>Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.</p>
                    </div>
                    <div>
                        <span><MoveDownLeft className=' group-hover:rotate-90 transition duration-700 ease-in-out' size={40} /></span>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2 hover:bg-blue-600 hover:cursor-pointer transition duration-700 ease-in-out py-12 px-10 rounded-md group'>
                    <div>
                        <h3 className=' text-xl font-bold group-hover:text-white'>04</h3>
                    </div>
                    <div>
                        <h3 className=' text-4xl font-bold group-hover:text-white'>Web Development</h3>
                    </div>
                    <div className=' w-[600px]'>
                        <p className=' text-base font-medium group-hover:text-white'>Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.</p>
                    </div>
                    <div>
                        <span><MoveDownLeft className=' group-hover:rotate-90 transition duration-700 ease-in-out' size={40} /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
