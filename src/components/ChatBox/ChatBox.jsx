import "./ChatBox.css"
import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as matchAPI from "../../utilities/match-api";
import MessageCard from "../MessageCard/MessageCard"
import socket from '../../utilities/socket'

const initState = {
    content: '',
}

export default function ChatBox({ matchId , matchInfo, setMatchInfo }) {
    const [messageData, setMessageData] = useState(initState)
    const [messages, setMessages] = useState(matchInfo.matchInfo.chat)
    const [myMessages, setMyMessages] = useState([])
    const [theirMessages, setTheirMessages] = useState([])

    useEffect(function () {
        async function getCurrentMatch() {
            const matchData = {matchId}
            const match = await matchAPI.getMatch(matchData)
            const theirProfile = match.filteredProfiles.find(profile => profile.user === match.match.user1 ||  profile.user === match.match.user2 )
            setMatchInfo({myProfile: match.myProfile, theirProfile: theirProfile, matchInfo: match.match})
        }
        getCurrentMatch()
    }, [])
    
    socket.on('update-message', function(data) {
        console.log(data)
    })
    
    let expirationDate = new Date(matchInfo.matchInfo.expiration)
    let expiration = Math.floor((expirationDate - Date.now()) / (24*60*60*1000))

// console.log(messages, "ALL MESSAGES")

    async function handleAddMessage(evt) {
        evt.preventDefault()
        const updatedMessage = {content: messageData.content, matchId}
        const messageInfo = await matchAPI.newMessage(updatedMessage)
        setMessageData(initState)
        setMessages(messageInfo.match.chat)
        socket.emit('add-message', messageInfo.match.chat)
    }

// console.log(messages)

    function handleChange(evt) {
        setMessageData({...messageData, [evt.target.name]: evt.target.value})
    }

    return (
        <div className="outer-chatbox">
            <div className="inner-chatbox">
                <div className="messages">
                    {messages.map((message, idx) => (
                        <MessageCard message={message} theirProfile={matchInfo.theirProfile} myProfile={matchInfo.myProfile} />
                    ))}
                </div>
                {expiration > 0 ?
                <form onSubmit={handleAddMessage}>
                    <textarea onChange={handleChange} name="content" value={messageData.content} placeholder="Type your message..." className="chat-textarea" cols="50" rows="2"></textarea>
                    <button>SEND</button>
                </form>
                :
                ""
            }
            </div>
        </div>
    )
}