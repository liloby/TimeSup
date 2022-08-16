import './MyMatchCard.css'
import {useState} from 'react'
import ChatBox from "../ChatBox/ChatBox"
export default function MyMatchCard({ matchInfo, matchId, setMatchInfo }) {

    console.log(matchInfo, "THIS IS MATCH INFO IN MATCHCARD")



    let expirationDate = new Date(matchInfo.matchInfo.expiration)
    let expiration = Math.floor((expirationDate - Date.now()) / (24*60*60*1000))

    return (
        <>
        <div className="MyMatchCard-wrapper">
            <div className="theirProfile">
                <label className='they'>{matchInfo.theirProfile.displayName}</label>
                <div className="Profile-img" style={{backgroundImage: `url(${matchInfo.theirProfile.image})`}}></div>
            </div> 
            {expiration > 1 ? 
            <h2>{expiration} days left</h2>
            :
            expiration === 1 ?
            <h2 className="Red-Text">{expiration} day left</h2>
            :
            expiration <= 1 ?
            <h2 className="Red-Text">Times Up!</h2>
            :
            ""
            }
            <div className="myProfile">
                <label className="you">You</label>
                <div className="Profile-img" style={{backgroundImage: `url(${matchInfo.myProfile.image})`}}></div>
            </div>
        </div>
            <ChatBox matchInfo={matchInfo} matchId={matchId} setMatchInfo={setMatchInfo} />
        </>
    )
}