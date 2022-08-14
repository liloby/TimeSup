import "./PersonCard.css"
import { useState, useEffect } from 'react'
import { createLikes, addMatch, addMatch2 } from "../../utilities/profile-api"
import { createMatch } from "../../utilities/match-api"
import * as profileAPI from "../../utilities/profile-api";

export default function PersonCard({ person, currentProfile, matches, setMatches, setCurrentProfile }) {
    const [like, setLike] = useState(null)
    const [checkLike, setCheckLike] = useState(null)
    const [checkProfile, setCheckProfile] = useState(null)
    const [likeList, setLikeList] = useState(currentProfile.likes)

    console.log(likeList, "THIS IS LIKE LIST")

    let hobbies = person.hobbies.replaceAll(",", "")
    let hobbiesArr = hobbies.split(" ")

    // This function is for updating like button status
    useEffect(function() {
        async function checkLike() {
            const checkLike = await currentProfile.likes.some(like => like.name.includes(person.displayName))
            setCheckLike(checkLike)
        }
        if (currentProfile) {
            checkLike()
        }
    })

    useEffect(function() {
        async function checkProfile() {
            const checkProfile = await currentProfile.displayName === person.displayName
            setCheckProfile(checkProfile)
        }
        if (currentProfile) {
            checkProfile()
        }
    })

    async function getCurrentProfile() {
          const myCurrentProfile = await profileAPI.getCurrentProfile();
          console.log(myCurrentProfile, "MY CURRENT PROFILE");
          setCurrentProfile(myCurrentProfile[0]);
      }

    async function handleLike(evt) {
        evt.preventDefault(evt);
        if (!currentProfile.likes.some(like => like.name.includes(person.displayName))) {
            // && currentProfile.displayName !== person.displayName
            console.log("LIKED PERSON's NAME", person.displayName)
            const likedPerson = {name: person.displayName}
            const profileLiked = await createLikes(likedPerson)
            setLikeList([{...likeList, likedPerson }])
            // console.log("THIS IS LIKELIST INSIDE OF HANDLELIKE",likeList)
            // console.log("THIS IS CURRENTPROFILE LIKES", currentProfile.likes)
            console.log("profileLiked", profileLiked)
            handleMatch()
            getCurrentProfile()
        } else {
            console.log(`${person.displayName} is already in your liked list`)
        }
    }


   async function handleMatch() {
    // Checks to see if the like array include each other's names
    const matchedProfiles = await person.likes.some(like => like.name.includes(currentProfile.displayName))
        if (matchedProfiles) {
            alert(`You and ${person.displayName} Matched!`)
            const matchedProfiles = {user1: currentProfile.user, user2: person.user}
            const createdMatch = await createMatch(matchedProfiles)
            const matchesNames = {displayName: person.displayName}
            const createdProfileMatch = await addMatch(matchesNames)
            const createdProfileMatch2 = await addMatch2(matchesNames)
            // setMatches([...matches, ])
            // Set State to show Matched Pair on Match Box
            console.log("CREATED MATCH", createdMatch)
            console.log("CREATED PROFILE MATCH ARRAY", createdProfileMatch)
            getCurrentProfile()
        }
    }


    return (
        <div className="PersonCard" style={{ backgroundImage: `url("${person.image}")`}}>
            <div className="Heart-wrapper">
            <form onSubmit={handleLike}>
            <button className={checkLike ?
             "Liked-Heart-btn" 
             :
             checkProfile || !currentProfile ?
             "Opague-Heart"
             : 
             "Heart-btn" }>
            </button>
            </form>
            </div>
            <div className="PersonCard-wrapper">
            <h3 className={checkProfile ? "you" : "them" }>{person.displayName}</h3>
            <div className="Hobby">
            {hobbiesArr.map((hobby) => (
                <p>{hobby}</p>
                ))}
            </div>
            <p>Age: {person.age}</p>
            <p>Bio: {person.bio}</p>
            </div>
        </div>
    )
}