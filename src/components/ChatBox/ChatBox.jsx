import "./ChatBox.css"
import { useRef, useState, useEffect } from 'react'

export default function ChatBox() {


    return (
        <div className="outer-chatbox">
            <div className="inner-chatbox">
                <div className="messages">
                <h1>Hello</h1>
                <h1>Bye</h1>
                
                </div>
                <form>
                    <textarea placeholder="Type your message..." className="chat-textarea" name="comment" cols="50" rows="2"></textarea>
                    <button>SEND</button>
                </form>
            </div>
        </div>
    )
}