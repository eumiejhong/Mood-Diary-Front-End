import React from 'react'
import { useUser } from './hooks/useUser';
import ProfileHeader from './ProfileHeader';

export default function Home() {
    const {user, isLoggedIn} = useUser();
    
    if (isLoggedIn) {
        return (
        <div className="ml-10">
            <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-green-600">Welcome to Mood Diary</h1>
            <div className="content-start">
                <br></br>
                <ProfileHeader />
            </div>
        </div>
        )
    }
    return (
        <div className="ml-10">
            <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-green-300">Welcome to Mood Diary!</h1>
        </div>
    )
}
