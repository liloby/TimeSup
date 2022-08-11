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



export default function App() {
  const [user, setUser] = useState(getUser())
  const [profileItems, setProfileItems] = useState([])
  const [currentProfile, setCurrentProfile] = useState([])
  

  useEffect(function() {
      async function getProfile() {
          const profile = await profileAPI.getAll()
          setProfileItems(profile)
          const currentLogProfile = await profile.find(item => item.user === user._id)
          setCurrentProfile(currentLogProfile)
      }
      getProfile()
  }, [])
  console.log("Profile Items", profileItems)
  console.log("Current Profile", currentProfile)

  async function getProfile() {
    const profile = await profileAPI.getAll()
    setProfileItems(profile)
    const currentLogProfile = await profile.find(item => item.user === user._id)
    setCurrentProfile(currentLogProfile)
}
  

  function addProfile(profile) {
    setProfileItems([...profileItems, profile])
  }

  return (
    <main className="App">
      <div className="Page-Wrapper">
      { 
        user ? 
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<HomePage currentProfile={currentProfile} setCurrentProfile={setCurrentProfile} user={user}/>} />
          <Route path='/profile' element={<ProfilePage user={user} currentProfile={currentProfile} profileItems={profileItems} addProfile={addProfile}/>} />
        </Routes>
        </>
        :
        <AuthPage getProfile={getProfile} setUser={setUser}/>
      }
      <Footer />
      </div>
    </main>
  );
}


