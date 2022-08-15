import "./ExploreAll.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import PersonCard from "../PersonCard/PersonCard";
import RandomCard from "../RandomCard/RandomCard";
import PopupCard from "../PopupCard/PopupCard"

export default function ExploreAll({
  profileItems,
  currentProfile,
  setMatches,
  matches,
  user,
  setCurrentProfile,
  setProfileItems,
  handleRandom,
  setMyMatches,
  createdProfile
}) {
    const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="ExploreAll">
        {showPopup ? 
        <PopupCard setShowPopup={setShowPopup} showPopup={showPopup}/>
        :
        ""
        }
      {currentProfile ? "" : <Link className="CreateProfile" to="/profile">Create a Profile to Start</Link>}
      {profileItems.length > 1 ? (
        <>
          <div className="ExploreAll-items">
            {profileItems.map((person, idx) => (
              <PersonCard
                person={person}
                key={person._id}
                idx={idx}
                matches={matches}
                setMatches={setMatches}
                currentProfile={currentProfile}
                user={user}
                setCurrentProfile={setCurrentProfile}
                setMyMatches={setMyMatches}
                setShowPopup={setShowPopup}
                createdProfile={createdProfile}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="Match">
            <RandomCard person={profileItems} setProfileItems={setProfileItems} handleRandom={handleRandom} setMyMatches={setMyMatches} />
          </div>
        </>
      )}
    </div>
  );
}
