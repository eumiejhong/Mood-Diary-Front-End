import React, {useCallback} from 'react'
import { Link } from "react-router-dom";
import { useUser } from './hooks/useUser';

const Navbar = () => {
    const {isLoggedIn, clearUser} = useUser();

    const onLogOutClick = useCallback(async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            clearUser();
            window.location.href = '/';
        } catch (error) {
            window.alert(error);
        }
    }, []);

    return (
        <nav className="bg-slate-800 text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 fixed w-full t-0 l-0 r-0">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/diary">Add Diary</Link>
                            </li>
                            <li>
                                <button onClick={onLogOutClick}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                        <li>
                            <Link to="/sign-up">Signup</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
