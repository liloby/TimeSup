import './MatchBox.css'
import * as profileAPI from '../../utilities/profile-api'
import { useState, useEffect } from 'react'
import MatchCard from "../MatchCard/MatchCard"

export default function MatchBox({ currentProfile, user, matchedProfiles, myMatches }) {
    const [checkProfile, setCheckProfile] = useState(false)
    const [matches, setMatches] = useState([])
    const [sortMatches, setSortMatches] = useState([])

console.log(matchedProfiles, "MATCHED PROFILES AT MATCHBOX")

    useEffect(function() {
        async function checkCurrentProfile() {
            if (user.profileCreated === true) {
                if (currentProfile.displayName) {
                    setCheckProfile(true)
                } 
                if (currentProfile.profileMatches.length < 1) {
                    setCheckProfile(false)
                }
            }
        }
        checkCurrentProfile()
    }, [matches, user, currentProfile])

console.log(myMatches, "my current matches")


    return (
        <div className='MatchBox'>
            <h1>All Matches</h1>
            {checkProfile ? 
            matchedProfiles.map((match, idx) => (
            <MatchCard match={match} key={match.id} idx={idx} checkProfile={checkProfile} myMatches={myMatches}/>
            ))
            :
            <h3 className="no-match">No Matches Yet</h3> 
        }
        </div>
    )
}