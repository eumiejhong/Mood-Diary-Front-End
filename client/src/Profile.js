import React, {useState, useEffect, useCallback} from 'react'
import {useUser} from './hooks/useUser'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import ProfileHeader from './ProfileHeader'

const Profile = ({entries}) => {
    const navigate = useNavigate()
    const {user, isLoggedIn} = useUser()
    const [quote, setQuote] = useLocalStorage("daily-quote", " ");

    const fetchQuote = async() => {
        const response = await fetch('/api/random-quote')
        console.log('response', response)
        const {success, status, quote} = await response.json();
        if (success) {
            setQuote(`"${quote.q}" - ${quote.a}`)
        }
    }

    useEffect(() => {
        if (!quote) {
            fetchQuote();
        }
    }, []);

    if (isLoggedIn) {
        return (
            <div className="ml-10">
                <h1 className="font-small leading-tight text-3xl mt-0 mb-2 text-blue-600"><b>Welcome to your profile, {user.username}</b></h1>
                <h4 className="text-xs mt-5"><b>Today's inspirational quote is...</b></h4>
                <blockquote className="pl-5 border-left border-l-4 mb-4 mt-2 border-left-grey-300">{quote}</blockquote>
                <ProfileHeader />

            {entries && (
                <div className="mt-10">
                    <h3 className="mb-2"><b>Diary Entries ({entries.length})</b></h3>
                    {entries.map((entry) => <div className="ml-5 p-2 bg-gray-100 mb-4 relative">
                        <div className="t-0 l-0 pt-1 text-xs">{(new Date(entry.date)).toLocaleDateString()}</div>
                        <div className="my-3">{entry.post} </div>
                        <button 
                            className="block text-sm p-2 text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 cursor-pointer rounded" 
                            onClick={() => navigate('/mood', {state: {diary: entry}})}
                        >Analysis →</button>
                    </div>)}
                </div>
            )}
            </div>
        )
    } else {
        navigate('/')
    }
    
}

export default Profile;