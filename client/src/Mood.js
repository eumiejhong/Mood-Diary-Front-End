import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Mood() {
    const { state } = useLocation()
    const diary = state.diary
    console.log(diary)
    return (
        <div className="ml-10">
            <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-green-300">Here is your Diary and takeaways at a glance!</h1>
            <h3 className="font-small leading-tight text-2xl mt-0 mb-2 text-blue-500">We use sentiment analysis and keyword analysis to help you summarize your day!</h3>
            <br></br>
            <ul>
            <li>
                <b>Your Diary Entry:</b> {diary.post}
            </li>
            <li>
                <b>Mood Analysis:</b> {diary.mood}
            </li>
            <li>
                <b>Key Words that Resonate:</b> {diary['keywords'].map(function(keyword) {
                    return <p>{keyword[0]}</p>
                })}
            </li>
            </ul>
        </div>
    )
}
