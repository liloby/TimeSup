import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar"
import MatchBox from "../../components/MatchBox/MatchBox"
import ExploreAll from "../../components/ExploreAll/ExploreAll"
import "./HomePage.css"
import * as profileAPI from '../../utilities/profile-api'

export default function HomePage() {
    const [profileItems, setProfileItems] = useState([])


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
    }

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
            <ExploreAll className="ExploreAll" profileItems={profileItems} />
            <MatchBox  className="MatchBox"/>
        </div>
    )
}