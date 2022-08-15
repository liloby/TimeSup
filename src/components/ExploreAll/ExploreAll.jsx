import "./ExploreAll.css";
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
  setMyMatches
}) {
    const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="ExploreAll">
        {showPopup ? 
        <PopupCard setShowPopup={setShowPopup} showPopup={showPopup}/>
        :
        ""
        }
      {currentProfile ? "" : <h1>Create a Profile to Start</h1>}
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
