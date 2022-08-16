import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as matchAPI from "../../utilities/match-api";
import "./MatchCard.css";
import ExpirationDays from "../ExpirationDays/ExpirationDays"

export default function MatchCard({ match, myMatches }) {
    const [oneMatch, setOneMatch] = useState()
    const [expiration, setExpiration] = useState()

useEffect(function () {
    if (match.user) {
        async function filterOneMatch() {
            const filteredMatch = await myMatches.find(m => m.user2 === match.user || m.user1 == match.user)
            setOneMatch(filteredMatch)
            console.log(oneMatch, "ONE MATCH IN USE EFFECT")
            let expirationDate = new Date(filteredMatch.expiration)
            let expiration = (expirationDate - Date.now()) / (24*60*60*1000)
            setExpiration(expiration)
        }
        filterOneMatch()
    }
}, [])

console.log(myMatches, "ALL MY MATCHES IN MATCHCARD")
console.log(match, "CURRENT ONE MATCH PROFILE")
console.log(oneMatch, "FOUND ONE MATCH")
console.log(expiration, "EXPIRATION IN DAYS")


  return (
    <div className="MatchCard">
        {oneMatch && expiration > 0? 
      <Link to={`/match/${oneMatch._id}`}>
        <div className="avatar-img" style={{backgroundImage: `url(${match.image})`}}>
        </div>
        <h3>{match.displayName}</h3>
        <ExpirationDays expiration={expiration}/>
      </Link>
        : 
        oneMatch && expiration < 0 ?
        <Link className="expired" to={`/match/${oneMatch._id}`}>
        <div className="avatar-img-expired" style={{backgroundImage: `url(${match.image})`}}>
        </div>
        <h3>{match.displayName}</h3>
        <ExpirationDays expiration={expiration}/>
        {/* <div className="delete-btn">
        <button>Delete</button>
        </div> */}
        </Link>
        :
        ""
    }
    </div>
  );
}
