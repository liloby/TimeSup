import "./ChatBox.css"
import { useRef, useState, useEffect } from 'react'
import * as matchAPI from "../../utilities/match-api";
import MessageCard from "../MessageCard/MessageCard"

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
    // async function getMyMessages() {
    //     const myMessages = await matchInfo.matchInfo.chat.filter(c => c.user === matchInfo.myProfile._id)
    //     setMyMessages(myMessages)
    // }
    // getMyMessages()
    // async function getTheirMessages() {
    //     const theirMessages = await matchInfo.matchInfo.chat.filter(c => c.user === matchInfo.theirProfile._id)
    //     setTheirMessages(theirMessages)
    // }
    // getTheirMessages()

    // console.log(myMessages, "THESE ARE MY CHATS")
    // console.log(theirMessages, "THESE ARE THEIR CHATS")

console.log(messages, "ALL MESSAGES")

    async function handleAddMessage(evt) {
        evt.preventDefault()
        const updatedMessage = {content: messageData.content, matchId}
        const messageInfo = await matchAPI.newMessage(updatedMessage)
        setMessageData(initState)
        setMessages(messageInfo.match.chat)
    }

console.log(messages)

    function handleChange(evt) {
        setMessageData({...messageData, [evt.target.name]: evt.target.value})
    }

    return (
        <div className="outer-chatbox">
            <div className="inner-chatbox">
                <div className="messages">
                    {messages.map((message, idx) => (
                        <MessageCard message={message} theirProfile={matchInfo.theirProfile} myProfile={matchInfo.myProfile}/>
                    ))}
                </div>
                <form onSubmit={handleAddMessage}>
                    <textarea onChange={handleChange} name="content" value={messageData.content} placeholder="Type your message..." className="chat-textarea" cols="50" rows="2"></textarea>
                    <button>SEND</button>
                </form>
            </div>
        </div>
    )
}