import './MatchBox.css'
import * as matchAPI from '../../utilities/match-api'
import { useState, useEffect } from 'react'
import MatchCard from "../MatchCard/MatchCard"

export default function MatchBox({ currentProfile, profileItems }) {
    const [matches, setMatches] = useState([])

    useEffect(function() {
        async function getMatches() {
            const matches = await matchAPI.getAll()
            console.log("THIS IS ALL THE MATCHES", matches)
            // Filters the current logged in user's matches instead of returning ALL MATCHES on the App
            const currentProfileMatches = await matches.filter(match => match.users.includes(currentProfile._id))
            setMatches(currentProfileMatches)
            // matchProfile()
        }
        getMatches()
    }, [])
    
    // console.log("THIS IS the filtered matches", matches)
    // console.log(currentProfile._id, "CURRENT LOG IN PROFILE ID")

    // async function matchProfile() {
    //     // Find the profiles that is in your match to show up on chat box
    //     const matchProfile = await profileItems.filter(item => item.user === )
    //     console.log(matchIdArr, "MATCHIDARRAY")
    //     console.log("FOUND PROFILE", matchProfile)
    // }



    return (
        <div className='MatchBox'>
            <h1>All Matches</h1>
            <div className='MatchBox-items'>
                {matches.map((match, idx) => (
                    <MatchCard match={match} key={idx} idx={idx} />
                ))}
            </div>
        </div>
    )
}