import './MatchBox.css'
import * as profileAPI from '../../utilities/profile-api'
import { useState, useEffect } from 'react'
import MatchCard from "../MatchCard/MatchCard"

export default function MatchBox({ currentProfile, user, matchedProfiles }) {
    const [checkProfile, setCheckProfile] = useState(false)
    const [matches, setMatches] = useState([])

console.log(matchedProfiles, "MATCHED PROFILES AT MATCHBOX")

    useEffect(function() {
        async function checkCurrentProfile() {
            if (currentProfile.displayName) {
                setCheckProfile(true)
            } 
            if (currentProfile.profileMatches.length < 1) {
                setCheckProfile(false)
            }
        }
        checkCurrentProfile()
        async function getCurrentProfile() {
            if (user.name) {
              const myCurrentProfile = await profileAPI.getCurrentProfile();
              setMatches(myCurrentProfile.profileMatches)
            }
          }
          getCurrentProfile()
    }, [matches, user, currentProfile])



    return (
        <div className='MatchBox'>
            <h1>All Matches</h1>
            {checkProfile ? 
            currentProfile.profileMatches.map((match, idx) => (
            <MatchCard match={match} key={match.id} idx={idx} checkProfile={checkProfile}/>
            ))
            :
            <h3>No Matches Yet</h3> 
        }
        </div>
    )
}