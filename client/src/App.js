import React, {useEffect, useState, useMemo, useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/main.css';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Diary from './Diary';
import Profile from './Profile';
import Mood from './Mood';
import { useUser } from './hooks/useUser';

function App() {
  const {user, isLoggedIn} = useUser();

  const [entries, setEntries] = useState([]);

  const updateEntries = useCallback(async () => {
    const response = await fetch('/api/diaries');
    const data = await response.json();
    const {success, diaryData} = data;
    if (success) {
      setEntries(diaryData)
    } else {
      window.alert('Error getting diary entries');
    }
  }, [setEntries]);

  useEffect(updateEntries, []);
  useEffect(updateEntries, [user]);

  return (
  <Router>
    <Navbar/>
    <div className="pt-10">
      <Routes>
        <Route path='/' element={<Home/>}/>
        {isLoggedIn ? (
          <>
          <Route path="/diary" element={<Diary />}/>
          <Route path='/profile' element={<Profile entries={entries} updateEntries={updateEntries} />}/>
          <Route path='/mood' element={<Mood />}/>
          </>
          ) : (
          <>
          <Route path='/sign-up' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          </>
          )}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
