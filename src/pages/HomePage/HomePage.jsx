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


    return (
        <div className="Home-Wrapper">
            <SearchBar className="SearchBar" />
            <ExploreAll className="ExploreAll" profileItems={profileItems} />
            <MatchBox  className="MatchBox"/>
        </div>
    )
}