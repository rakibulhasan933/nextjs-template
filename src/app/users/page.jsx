import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: "Users",
    description: "next app",
};

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;

}

export default async function page() {
    const users = await getUsers();
    console.log(users);
    return (
        <div className='m-10 '>
            <h1 className='text-2xl font-bold text-center'>Users</h1>
            <div className='my-6 grid grid-cols-3 gap-3'>
                {users.map((user, index) => (
                    <div key={index} className="card  shadow-2xl w-96">
                        <div className="card-body">
                            <h2>id: - {user.id} </h2>
                            <h3>username:- {user.username} </h3>
                            <h1>Name:- {user.name} </h1>
                            <p>Email :- {user.email} </p>
                            <Link href={`users/${user.id}`} >Visit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
