import "./ExploreAll.css";
import PersonCard from "../PersonCard/PersonCard";
import RandomCard from "../RandomCard/RandomCard";
import { useEffect } from "react";

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
  return (
    <div className="ExploreAll">
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
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="Match">
            <RandomCard person={profileItems} setProfileItems={setProfileItems} handleRandom={handleRandom}  />
          </div>
        </>
      )}
    </div>
  );
}
