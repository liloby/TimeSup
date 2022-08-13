import { useEffect, useState } from 'react'
import "./MatchCard.css"

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
})


    return (
        <div className='MatchCard'>
            
        </div>
    )
}