import './MatchBox.css'
import * as matchAPI from '../../utilities/match-api'
import { useState, useEffect } from 'react'
import MatchCard from "../MatchCard/MatchCard"

export default function MatchBox({ currentProfile, profileItems, currentMatches, setCurrentProfile }) {
    const [checkProfile, setCheckProfile] = useState(false)



    useEffect(function() {
        async function checkCurrentProfile() {
            if (currentProfile.displayName) {
                setCheckProfile(true)
                console.log("HELLO HOW ARE YOU")
            } 
        }
        checkCurrentProfile()
    }, [])


    return (
        <div className='MatchBox'>
            <h1>All Matches</h1>
            {checkProfile ? 
            currentProfile.profileMatches.map((match, idx) => (
            <MatchCard profileItems={profileItems} match={match} key={idx} idx={idx} checkProfile={checkProfile}/>
            ))
            :
            <h3>No Matches Yet</h3> 
        }
        </div>
    )
}