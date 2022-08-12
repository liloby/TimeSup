import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar"
import MatchBox from "../../components/MatchBox/MatchBox"
import ExploreAll from "../../components/ExploreAll/ExploreAll"
import "./HomePage.css"
import * as profileAPI from '../../utilities/profile-api'
import * as matchAPI from '../../utilities/match-api'

export default function HomePage({currentProfile, setCurrentProfile, user, getProfile}) {
    const [profileItems, setProfileItems] = useState([])
    const [matches, setMatches] = useState([])


    useEffect(function() {
        async function getProfile() {
            const profile = await profileAPI.getAll()
            setProfileItems(profile)
        }
        getProfile()
    }, [])
    console.log(profileItems)

    async function getProfile() {
        const profile = await profileAPI.getAll()
        setProfileItems(profile)
        const currentLogProfile = await profile.find(item => item.user === user._id)
        setCurrentProfile(currentLogProfile)
    }

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

    async function getMatches() {
        const matches = await matchAPI.getAll()
        console.log("THIS IS ALL THE MATCHES", matches)
        // Filters the current logged in user's matches instead of returning ALL MATCHES on the App
        const currentProfileMatches = await matches.filter(match => match.users.includes(currentProfile._id))
        setMatches(currentProfileMatches)
        // matchProfile()
    }

    console.log(matches,"HOMEPAGE MATCHES")

    function handleRandom() {
        if (profileItems.length > 1) {
            const randomMatch = profileItems[Math.floor(Math.random() * profileItems.length)]
            setProfileItems(randomMatch)
        }
        console.log("Nothing happened")
    }



    return (
        <div className="Home-Wrapper">
            <SearchBar className="SearchBar" handleRandom={handleRandom} getProfile={getProfile} profileItems={profileItems}/>
            <ExploreAll className="ExploreAll" profileItems={profileItems} getProfile={getProfile} currentProfile={currentProfile} getMatches={getMatches} matches={matches}/>
            <MatchBox  className="MatchBox" currentProfile={currentProfile} profileItems={profileItems} getMatches={getMatches} matches={matches}/>
        </div>
    )
}