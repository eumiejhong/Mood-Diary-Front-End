import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Diary() {
    const navigate = useNavigate()

    const initialState = {
        user_id: "",
        title: "",
        date: "",
        post: "",
        mood: "",
        keywords: ""
    }
    const [formData, setFormData] = useState(initialState)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/add-diary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            const {status, success, diaryData} = data;
            navigate('/mood', {state: {diary: diaryData}})

        } catch (e) {
            
        }
    }
    return (
        <form className="max-w-10xl mx-auto sm:px-1 lg:px-1" onSubmit={handleSubmit} style={{width: 800, display: 'flex', flexDirection: 'column'}}>
            <label className="mt-10 text-xl text-gray-600" htmlFor="title">Title:</label>
            <input className="mb-5 border-2 border-gray-300 p-2 w-full" id="title" type="text" name="title" value={formData.title} onChange={handleChange} />

            <label className="text-xl text-gray-600" htmlFor="date">Date:</label>
            <input className="mb-5 border-2 border-gray-300 p-2 w-full" id="date" type="date" name="date" value={formData.date} onChange={handleChange} />

            <label className="text-xl text-gray-600" htmlFor="Post">Post:</label>
            <textarea className="mb-5 border-2 border-gray-300 p-2 w-full h-40" id="post" type="text" name="post" value={formData.post} onChange={handleChange} />

            <button className="p-3 bg-blue-500 text-white hover:bg-blue-400">Add Diary</button>
        </form>
    )
}
