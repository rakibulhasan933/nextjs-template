import { DownloadIcon, FacebookIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=' basis-1/2'>
                        <Image src="/messi.jpg"
                            className=" w-[500px]  h-[400px] rounded-lg shadow-2xl" width={500} height={300} alt='hero'
                        ></Image>
                    </div>
                    <div className=' basis-1/2'>

                        <h1 className="text-5xl font-bold leading-relaxed text-blue-800"> <span className=' text-3xl text-black'>I am Gerold</span> <br />
                            Next-Level Web <br />
                            Developer.</h1>
                        <p className="pr-20 py-8 font-medium text-xl">
                            I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                        </p>

                        <div className=' flex gap-4'>
                            <button className="btn btn-outline btn-accent">Download <DownloadIcon></DownloadIcon> </button>
                            <button className='btn btn-circle btn-outline btn-info'> <FacebookIcon size={30}></FacebookIcon> </button>
                            <button className='btn btn-circle btn-outline btn-error'> <YoutubeIcon size={30}></YoutubeIcon> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
