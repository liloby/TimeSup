import { useEffect, useState } from 'react'

export default function MatchCard({ match, profileItems, checkProfile }) {
    const [profileMatch, setProfileMatch] = useState([])


useEffect(function() {
    async function findProfile() {
        if (checkProfile) {
            const profileInfo = await profileItems.find(item => item.displayName === match.name)
            console.log(profileInfo, "profilelkekljekljek")
            setProfileMatch(profileInfo)
        }
    }
    findProfile()
}, [])

    return (
        <div>
            <div style={{ backgroundImage: `url("${profileMatch.image}")`}}>
                <img width="60px"src={profileMatch.image} />
            </div>
            <p>{profileMatch.displayName}</p> 
        </div>
    )
}