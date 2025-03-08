import { getUsers } from '@/lib/getUsers';
import { cookies } from 'next/headers';
import React from 'react'

export default async function ServerSide() {
    cookies();
    const users = await getUsers();
    return (
        <div className=" m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user, index) => (
                <div key={index} className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p>{user.email} </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
