import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import MatchDetailPage from '../MatchDetailPage/MatchDetailPage'
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import * as profileAPI from "../../utilities/profile-api";
import * as matchAPI from "../../utilities/match-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [profileItems, setProfileItems] = useState([]);
  const [currentProfile, setCurrentProfile] = useState();
  const [currentMatches, setCurrentMatches] = useState([]);

  useEffect(
    function () {
      async function getCurrentProfile() {
        if (user.name) {
          const myCurrentProfile = await profileAPI.getCurrentProfile();
          console.log(myCurrentProfile, "MY CURRENT PROFILE");
          setCurrentProfile(myCurrentProfile[0]);
        }
      }
      getCurrentProfile();
      async function getProfile() {
        const profile = await profileAPI.getAll();
        setProfileItems(profile);
      }
      getProfile();
    },
    [user]
  );


  function addProfile(profile) {
    setProfileItems([...profileItems, profile]);
  }

  return (
    <main className="App">
      <div className="Page-Wrapper">
        {user ? (
          <>
            <NavBar
              user={user}
              setUser={setUser}
              setProfileItems={setProfileItems}
              setCurrentProfile={setCurrentProfile}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    currentProfile={currentProfile}
                    setCurrentProfile={setCurrentProfile}
                    user={user}
                    profileItems={profileItems}
                    setProfileItems={setProfileItems}
                    currentMatches={currentMatches}
                    setCurrentMatches={setCurrentMatches}
                  />
                }
              />
              <Route
                path="/match/:matchId"
                element={
                <MatchDetailPage 
                />
              }
              />
              <Route
                path="/profile"
                element={
                  <ProfilePage
                    user={user}
                    setCurrentProfile={setCurrentProfile}
                    currentProfile={currentProfile}
                    profileItems={profileItems}
                    addProfile={addProfile}
                  />
                }
              />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
        <Footer />
      </div>
    </main>
  );
}
