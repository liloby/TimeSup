import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MatchBox from "../../components/MatchBox/MatchBox";
import ExploreAll from "../../components/ExploreAll/ExploreAll";
import "./HomePage.css";
import * as profileAPI from "../../utilities/profile-api";
import * as matchAPI from "../../utilities/match-api";
import { getUser } from "../../utilities/users-service";

export default function HomePage({
  user,
  currentProfile,
  setCurrentProfile,
  createdProfile
}) {
  const [profileItems, setProfileItems] = useState([]);
  const [myMatches, setMyMatches] = useState([])
  const [matchedProfiles, setMatchedProfiles] = useState([])
  const [masterProfileItems ,setMasterProfileItems] = useState([])
  const [theirProfiles, setTheirProfiles] = useState([])

  console.log(myMatches, "MY MATCHES FKJDSLKFJLDSKJFS")
  console.log(matchedProfiles, "MY MATCHES PROFILESSSSSSS")

  useEffect(
    function () {
        // Obtain current logged in User's Profile
      async function getCurrentProfile() {
        if (user.profileCreated === true && createdProfile === true) {
          const myCurrentProfile = await profileAPI.getCurrentProfile();
          console.log(myCurrentProfile, "MY CURRENT PROFILE");
          setCurrentProfile(myCurrentProfile[0]);
        }
      }
      getCurrentProfile();
      // Obtain all profiles in the app
      async function getProfile() {
          const profile = await profileAPI.getAll();
          if (user.profileCreated === true && createdProfile === true) {
        const theirProfiles = profile.filter(p => p.displayName !== currentProfile.displayName)
        setTheirProfiles(theirProfiles)
        }
        setProfileItems(profile);
        setMasterProfileItems(profile)
      }
      getProfile();
      // Obtain all my matches from created matches Schema
      async function getMatches() {
        const myMatches = await matchAPI.findMatch()
        setMyMatches(myMatches)
      }
      getMatches()
      getUser()
    },
    [user]
  );

console.log(theirProfiles, "NOT MY PROFILESSSS")

  useEffect(function () {
        //   Obtain the current profile's matches Profile
        if (user.profileCreated === true) {
            async function getMatchesProfile() {
                const myMatchesProfile = await matchAPI.getMatchProfile()
                setMatchedProfiles(myMatchesProfile)
              }
              getMatchesProfile()
        } else {
            console.log("NO CURRENT PROFILE YET")
        }
        
  }, [currentProfile, user])


  function handleRandom() {
    if (currentProfile) {
      if (profileItems.length > 1) {
        const randomMatch =
          profileItems[Math.floor(Math.random() * profileItems.length)];
        setProfileItems(randomMatch);
      }
    }
  }

  function handleFilter(evt) {
    if(evt.target.value === "All") {
        return setProfileItems(masterProfileItems)
    }
    const filteredProfileItems = masterProfileItems.filter(item => item.sex === evt.target.value)
    setProfileItems(filteredProfileItems)
  }

  return (
    <div className="Home-Wrapper">
      <SearchBar
        className="SearchBar"
        handleRandom={handleRandom}
        profileItems={profileItems}
        setProfileItems={setProfileItems}
        handleFilter={handleFilter}
      />
      <ExploreAll
        className="ExploreAll"
        profileItems={profileItems}
        currentProfile={currentProfile}
        setCurrentProfile={setCurrentProfile}
        setProfileItems={setProfileItems}
        user={user}
        handleRandom={handleRandom}
        setMyMatches={setMyMatches}
        createdProfile={createdProfile}
      />
      <MatchBox
        className="MatchBox"
        user={user}
        setCurrentProfile={setCurrentProfile}
        currentProfile={currentProfile}
        matchedProfiles={matchedProfiles}
        myMatches={myMatches}
        createdProfile={createdProfile}
      />
    </div>
  );
}
