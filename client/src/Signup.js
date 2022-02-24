import React, { useState } from 'react'
import {useUser} from './hooks/useUser';

export default function Signup() {
    const {user, setUser} = useUser()

    const initialState = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        country: "",
        image_url: "",
        bio: ""
    }
    const [formData, setFormData] = useState(initialState)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        alert(`Welcome to Mood Diary, ${formData.username}`)
        try {
            const response = await fetch('/api/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            const {status, success, userData} = data;
            if (status === 404) {
                throw new Error('No user');
            }
            setUser(userData)
           
        } catch (e) {
            
        }
    }

    return (
        <form className="bg-grey-lighter min-h-screen flex flex-col" onSubmit={handleSubmit} style={{width: 300, display: 'flex', flexDirection: 'column'}}>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center"><b>Sign up</b></h1>
                <label className="mb-8 text-md text-center" htmlFor="first_name">First Name:</label>
                <input className="block border border-grey-light w-full p-3 rounded mb-4" id="first_name" type="text" name="first_name" value={formData.first_name} onChange={handleChange} />

                <label className="mb-8 text-md text-center" htmlFor="last_name">Last Name:</label>
                <input className="block border border-grey-light w-full p-3 rounded mb-4" id="last_name" type="text" name="last_name" value={formData.last_name} onChange={handleChange} />

                <label className="mb-8 text-md text-center" htmlFor="username">Username:</label>
                <input className="block border border-grey-light w-full p-3 rounded mb-4" id="username" type="text" name="username" value={formData.username} onChange={handleChange} />

                <label className="mb-8 text-md text-center" htmlFor="email">Email:</label>
                <input className="block border border-grey-light w-full p-3 rounded mb-4" id="email" type="email" name="email" value={formData.email} onChange={handleChange} />

                <label className="mb-8 text-md text-center" htmlFor="password">Password:</label>
                <input className="block border border-grey-light w-full p-3 rounded mb-4" id="password" type="password" name="password" value={formData.password} onChange={handleChange} />

                <label className="mb-8 text-md text-center" htmlFor="country">Country:</label>
                <input className="block border border-grey-light w-full p-3 rounded mb-4" id="country" type="text" name="country" value={formData.country} onChange={handleChange} />

                <label className="mb-8 text-md text-center" htmlFor="image_url">Image URL:</label>
                <input className="block border border-grey-light w-full p-3 rounded mb-4" id="image_url" type="url" name="image_url" value={formData.image_url} onChange={handleChange} />

                <label className="mb-8 text-md text-center" htmlFor="bio">Bio:</label>
                <input className="block border border-grey-light w-full p-3 rounded mb-4" id="bio" type="text" name="bio" value={formData.bio} onChange={handleChange} />

                <button className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Sign up!</button>
            </div>
            </div>
        </form>
    )
}
