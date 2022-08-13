import { useEffect, useState } from 'react'
import "./MatchCard.css"


export default function MatchCard({ match }) {

    return (
        <div className='MatchCard'>
        <h3>{match.name}</h3>
        </div>
    )
}