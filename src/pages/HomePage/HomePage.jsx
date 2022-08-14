import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MatchBox from "../../components/MatchBox/MatchBox";
import ExploreAll from "../../components/ExploreAll/ExploreAll";
import "./HomePage.css";
import * as profileAPI from "../../utilities/profile-api";
import * as matchAPI from "../../utilities/match-api";

export default function HomePage({
  user,
  currentProfile,
  setCurrentProfile,
}) {
  const [profileItems, setProfileItems] = useState([]);
  const [myMatches, setMyMatches] = useState([])
  const [matchedProfiles, setMatchedProfiles] = useState()

  console.log(myMatches, "MY MATCHES FKJDSLKFJLDSKJFS")
  console.log(matchedProfiles, "MY MATCHES PROFILESSSSSSS")

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
      async function getMatches() {
        const myMatches = await matchAPI.findMatch()
        setMyMatches(myMatches)
      }
      getMatches()
      async function getMatchesProfile() {
        const myMatchesProfile = await matchAPI.getMatchProfile()
        setMatchedProfiles(myMatchesProfile)
      }
      getMatchesProfile()
    },
    [user]
  );

  function handleRandom() {
    if (currentProfile) {
      if (profileItems.length > 1) {
        const randomMatch =
          profileItems[Math.floor(Math.random() * profileItems.length)];
        setProfileItems(randomMatch);
      }
    }
  }

  return (
    <div className="Home-Wrapper">
      <SearchBar
        className="SearchBar"
        handleRandom={handleRandom}
        profileItems={profileItems}
        setProfileItems={setProfileItems}
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
      />
      <MatchBox
        className="MatchBox"
        user={user}
        setCurrentProfile={setCurrentProfile}
        currentProfile={currentProfile}
      />
    </div>
  );
}
