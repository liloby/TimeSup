import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import "./MatchCard.css"


export default function MatchCard({ match }) {

    return (
        <div className='MatchCard'>
        <Link to={`/match/${match._id}`}>
        <h3>{match.name}</h3>

        </Link>
        </div>
    )
}