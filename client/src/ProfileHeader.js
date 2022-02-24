import React from 'react';
import { useUser } from "./hooks/useUser";

const ProfileHeader = () => {
    const {user, isLoggedIn} = useUser()

    return (
        <div className="mr-5">
            <div className="flex w-full">
                <img className="mr-5" width="300" height="200" src={user.image_url, 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg'}></img>
                <ul>
                    <li>
                        <b>Name: </b> {user.first_name} {user.last_name}
                    </li>
                    <li>
                        <b>Email: </b> {user.email}
                    </li>
                    <li>
                        <b>Country: </b> {user.country}
                    </li>
                    <li>
                        <b>Bio: </b> {user.bio}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileHeader;