import './MessageCard.css'

export default function MessageCard({message, myProfile, theirProfile}) {
    return (
        <div>
            {/* <div class={message.user === myProfile._id ? "me" : "them" }>{message.content}</div> */}

            {message.user === myProfile._id ? 
            <div className="MyMessages-wrapper">
            <p>
                {message.content}
            </p>
                <div className="myAvatar" style={{backgroundImage: `url(${myProfile.image})`}}>
                </div>
            </div>
            :
            <div className="TheirMessages-wrapper">
            <div className="theirAvatar" style={{backgroundImage: `url(${theirProfile.image})`}}>
            </div>   
            <p>
                {message.content}
            </p>
            </div>
            }
            </div>
    )
}