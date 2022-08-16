import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as matchAPI from "../../utilities/match-api";
import "./MatchDetailPage.css"
import MyMatchCard from "../../components/MyMatchCard/MyMatchCard"

export default function MatchDetailPage({currentProfile}) {
    // const [theirProfile, setTheirProfile] = useState()
    // const [myProfile, setMyProfile] = useState(currentProfile)
    // const [matchInfo, setMatchInfo] = useState()
    const { matchId } = useParams()
    const [matchInfo, setMatchInfo] = useState({})


useEffect(function () {
    async function getCurrentMatch() {
        const matchData = {matchId}
        const match = await matchAPI.getMatch(matchData)
        const theirProfile = match.filteredProfiles.find(profile => profile.user === match.match.user1 ||  profile.user === match.match.user2 )
        setMatchInfo({myProfile: match.myProfile, theirProfile: theirProfile, matchInfo: match.match})
        console.log(match, "THIS IS the MATCH ")
    }
    getCurrentMatch()
}, [])

console.log(matchInfo, "MATCH INFOOOOOOOOO")


    return (
        <div>
            {matchInfo.matchInfo && matchInfo.myProfile && matchInfo.theirProfile ? 
            <MyMatchCard matchInfo={matchInfo} />
            :
            <h1>No Data</h1>
            }
        </div>
    )
}