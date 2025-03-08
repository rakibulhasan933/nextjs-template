
import ClientSide from '@/components/ClientSide';
import Link from 'next/link';
import React, { Suspense } from 'react'


export default function page() {

    return (
        <div className='m-4'>
            <h1>Home</h1>
            <p>Welcome to the Client page!</p>
            <Link href="/">Home</Link>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ClientSide />
                </Suspense>
            </div>
        </div>
    )
}
