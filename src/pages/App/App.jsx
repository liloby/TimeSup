import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import AuthPage from "../AuthPage/AuthPage"
import { getUser } from "../../utilities/users-service" 
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import * as profileAPI from '../../utilities/profile-api'
import * as matchAPI from '../../utilities/match-api'


export default function App() {
  const [user, setUser] = useState(getUser())
  const [profileItems, setProfileItems] = useState([])
  const [currentProfile, setCurrentProfile] = useState([])
  const [currentMatches, setCurrentMatches] = useState([])


  useEffect(function() {
        async function getProfile() {
          const profile = await profileAPI.getAll()
          setProfileItems(profile)
          const currentLogProfile = await profile.find(item => item.user === user._id)
          setCurrentProfile(currentLogProfile)
      }
    getProfile()
  }, [])

  useEffect(function() {
    async function getMatches() {
        const matches = await matchAPI.getAll()
        console.log("Matches after getAll fetch", matches)
        // setAllMatches(matches)
        const filteredMatches = await matches.filter(match => ((match.user1 || match.user2 )=== user._id))
        setCurrentMatches(filteredMatches)
    }
    getMatches()
}, [])

  async function getProfile() {
    const profile = await profileAPI.getAll()
    setProfileItems(profile)
    const currentLogProfile = await profile.find(item => item.user === user._id)
    setCurrentProfile(currentLogProfile)
}

console.log("CURRENT PROFILE IN APP PAGE", currentProfile)

  function addProfile(profile) {
    setProfileItems([...profileItems, profile])
  }

  return (
    <main className="App">
      <div className="Page-Wrapper">
      { 
        user ? 
        <>
        <NavBar user={user} setUser={setUser} setProfileItems={setProfileItems} setCurrentProfile={setCurrentProfile} />
        <Routes>
          <Route path='/' element={<HomePage currentProfile={currentProfile} setCurrentProfile={setCurrentProfile} user={user} profileItems={profileItems} setProfileItems={setProfileItems} getProfile={getProfile} currentMatches={currentMatches} setCurrentMatches={setCurrentMatches} />} />
          <Route path='/profile' element={<ProfilePage user={user} setCurrentProfile={setCurrentProfile} currentProfile={currentProfile} profileItems={profileItems} addProfile={addProfile}/>} />
        </Routes>
        </>
        :
        <AuthPage getProfile={getProfile} setUser={setUser} />
      }
      <Footer />
      </div>
    </main>
  );
}


