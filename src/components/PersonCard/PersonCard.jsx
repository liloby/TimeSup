import "./PersonCard.css";
import { useState, useEffect } from "react";
import { createLikes, addMatch, addMatch2 } from "../../utilities/profile-api";
import { createMatch } from "../../utilities/match-api";
import * as profileAPI from "../../utilities/profile-api";
import * as matchAPI from "../../utilities/match-api";

export default function PersonCard({
  person,
  currentProfile,
  setCurrentProfile,
  setMyMatches,
  setShowPopup,
  createdProfile,
  user,
}) {
  const [like, setLike] = useState(null);
  const [checkLike, setCheckLike] = useState(null);
  const [checkProfile, setCheckProfile] = useState(null);
  const [hobbies, setHobbies] = useState([])

  useEffect(function () {
    async function getHobbies() {
        const hobbies = person.hobbies.replaceAll(",", "");
        const hobbiesArr = hobbies.split(" ");
        setHobbies(hobbiesArr)
    }
    getHobbies()
  }, [])

  // This function is for updating like button status
  useEffect(function () {
        if (currentProfile) {
            checkLikeFunc();
        }
  });


  async function checkLikeFunc() {
    const checkLike = await currentProfile.likes.some((like) => like.name.includes(person.displayName))
    console.log(checkLike, "THIS IS CHECK LIKE")
    setCheckLike(checkLike);
  }

  
  useEffect(function () {
      if (currentProfile) {
    async function checkProfile() {
      const checkProfile =
        (await currentProfile.displayName) === person.displayName;
      setCheckProfile(checkProfile);
    }
    checkProfile();
}
  });

  async function getMatches() {
    const myMatches = await matchAPI.findMatch();
    console.log(myMatches, "MY MATCHES FINALLY!!!!!!!");
    setMyMatches(myMatches)
  }

  async function getCurrentProfile() {
    const myCurrentProfile = await profileAPI.getCurrentProfile();
    console.log(myCurrentProfile, "MY CURRENT PROFILE");
    setCurrentProfile(myCurrentProfile[0]);
  }

  async function handleLike(evt) {
    evt.preventDefault(evt);
    if (
      !currentProfile.likes.some((like) =>
        like.name.includes(person.displayName)
      )
    ) {
      // && currentProfile.displayName !== person.displayName
      console.log("LIKED PERSON's NAME", person.displayName);
      const likedPerson = { name: person.displayName };
      const profileLiked = await createLikes(likedPerson);
      console.log("profileLiked", profileLiked);
      handleMatch();
      getCurrentProfile();
    } else {
      console.log(`${person.displayName} is already in your liked list`);
    }
  }

  async function handleMatch() {
    // Checks to see if the like array include each other's names
    const matchedProfiles = await person.likes.some((like) =>
      like.name.includes(currentProfile.displayName)
    );
    if (matchedProfiles) {
        setShowPopup(true)
      const matchedProfiles = {
        user1: currentProfile.user,
        user2: person.user,
      };
      const createdMatch = await createMatch(matchedProfiles);
      const matchesNames = { displayName: person.displayName };
      const createdProfileMatch = await addMatch(matchesNames);
      const createdProfileMatch2 = await addMatch2(matchesNames);
      // setMatches([...matches, ])
      // Set State to show Matched Pair on Match Box
      console.log("CREATED MATCH", createdMatch);
      console.log("CREATED PROFILE MATCH ARRAY", createdProfileMatch);
      getCurrentProfile();
      getMatches();
    }
  }

  return (
    <div
      className="PersonCard"
      style={{ backgroundImage: `url("${person.image}")` }}
    >
      <div className="Heart-wrapper">
        <form onSubmit={handleLike}>
          <button
            className={
              checkLike
                ? "Liked-Heart-btn"
                : checkProfile || !currentProfile 
                ? "Opague-Heart"
                : "Heart-btn"
            }
          ></button>
        </form>
      </div>
      <div className="PersonCard-wrapper">
        <h3 className={checkProfile ? "you" : "them"}>{person.displayName}</h3>
        <div className="Hobby">
          {hobbies.map((hobby) => (
            <p>{hobby}</p>
          ))}
        </div>
        <p>Age: {person.age}</p>
        <p>Bio: {person.bio}</p>
      </div>
    </div>
  );
}
