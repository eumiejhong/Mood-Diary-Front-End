import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from './hooks/useUser'

export default function Login() {

    const navigate = useNavigate()
    const initialState = {
        username: "",
        password: ""
    }
    const {user, setUser} = useUser()
    const [formData, setFormData] = useState(initialState)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const {username, password} = formData
        alert(`Welcome back, ${username}`)
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            const {status, success, userData} = data;
            if (status === 404) {
                throw new Error('No user');
            }
            setUser(userData)
            navigate('/')
        } catch (e) {
        }
        
    }

    if (user) {
        return <div>{user.username} is logged in</div>
    }
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/2 mx-auto mt-10" onSubmit={handleSubmit}>
            <label htmlFor="username" className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
            <input className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" name="username" value={formData.username} onChange={handleChange} />

            <label htmlFor="password" className="block text-grey-darker text-sm font-bold mb-2">Password:</label>
            <input className="mb-5 shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
            
            <button className="w-full text-center py-3 rounded bg-green text-white bg-green-800 cursor-pointer hover:bg-green-600 focus:outline-none my-1">Log in!</button>
        </form>
    )
}
