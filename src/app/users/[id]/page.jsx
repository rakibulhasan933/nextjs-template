import React from 'react'

export async function generateMetadata({ params }) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json();
    return {
        title: user.name,
        description: user.email
    }
}

export default async function page({ params }) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json();

    return (
        <div className=" flex justify-center my-20">
            <div className="card  shadow-2xl w-96">
                <div className="card-body">
                    <h2>id: - {user.id} </h2>
                    <h3>username:- {user.username} </h3>
                    <h1>Name:- {user.name} </h1>
                    <p>Email :- {user.email} </p>
                </div>
            </div>
        </div>
    )
}
