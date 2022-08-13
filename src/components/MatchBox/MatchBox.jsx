import './MatchBox.css'
import * as profileAPI from '../../utilities/profile-api'
import { useState, useEffect } from 'react'
import MatchCard from "../MatchCard/MatchCard"

export default function MatchBox({ currentProfile, profileItems, user }) {
    const [checkProfile, setCheckProfile] = useState(false)
    const [matches, setMatches] = useState([])



    useEffect(function() {
        async function checkCurrentProfile() {
            if (currentProfile.displayName) {
                setCheckProfile(true)
            } else {
                console.log("NO PROFILE YET")
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
            <MatchCard profileItems={profileItems} match={match} key={match.id} idx={idx} checkProfile={checkProfile}/>
            ))
            :
            <h3>No Matches Yet</h3> 
        }
        </div>
    )
}