import './TheirMessages.css'

export default function TheirMessages({message, theirAvatar}) {
    return (
        <div className="TheirMessages-wrapper">
            <div className="theirAvatar" style={{backgroundImage: `url(${theirAvatar})`}}>
            </div>   
        <p>
            {message.content}
        </p>
        </div>
    )
}