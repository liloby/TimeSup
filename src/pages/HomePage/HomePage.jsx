import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar"
import MatchBox from "../../components/MatchBox/MatchBox"
import ExploreAll from "../../components/ExploreAll/ExploreAll"
import "./HomePage.css"
import * as profileAPI from '../../utilities/profile-api'
import * as matchAPI from '../../utilities/match-api'

export default function HomePage({ user, getProfile, currentProfile, setCurrentProfile, currentMatches, setCurrentMatches}) {
    const [profileItems, setProfileItems] = useState([])
    // const [allMatches, setAllMatches] = useState([])


    useEffect(function() {
        async function getProfile() {
            const profile = await profileAPI.getAll()
            setProfileItems(profile)
            const currentLogProfile = await profile.find(item => item.user === user._id)
            console.log(currentLogProfile, "CurrentLogProfile")
            setCurrentProfile(currentLogProfile)
        }
        getProfile()
    }, [])

    useEffect(function() {
        async function getMatches() {
            const matches = await matchAPI.getAll()
            console.log("Matches after getAll fetch", matches)
            // setAllMatches(matches)
            const filteredMatches = await matches.filter(match => (match.user1 || match.user2 === user._id))
            setCurrentMatches(filteredMatches)
        }
        getMatches()
    }, [])


    console.log("ALL PROFILES", profileItems)

    console.log(user.name, user._id)

    console.log(currentProfile, "CURRENT PROFILE")

    async function getProfile() {
        const profile = await profileAPI.getAll()
        setProfileItems(profile)
        const currentLogProfile = await profile.find(item => item.user === user._id)
        console.log(currentLogProfile, "CurrentLogProfile")
        setCurrentProfile(currentLogProfile)
    }

    async function getMatches() {
        const matches = await matchAPI.getAll()
        console.log("Matches after getAll fetch", matches)
        // setAllMatches(matches)
        const filteredMatches = await matches.filter(match => (match.user1 || match.user2 === user._id))
        setCurrentMatches(filteredMatches)
    }
    // console.log(allMatches, "useState matches")
    console.log(currentMatches, "FILTERED useState MATCHES")

    function handleRandom() {
        if (profileItems.length > 1) {
            const randomMatch = profileItems[Math.floor(Math.random() * profileItems.length)]
            setProfileItems(randomMatch)
        }
    }

    return (
        <div className="Home-Wrapper">
            <SearchBar className="SearchBar" handleRandom={handleRandom} getProfile={getProfile} profileItems={profileItems}/>
            <ExploreAll className="ExploreAll" profileItems={profileItems} getProfile={getProfile} currentProfile={currentProfile} />
            <MatchBox  className="MatchBox" setCurrentProfile={setCurrentProfile} currentProfile={currentProfile} profileItems={profileItems} currentMatches={currentMatches}/>
        </div>
    )
}