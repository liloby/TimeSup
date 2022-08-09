import "./ProfileInfo.css"

export default function ProfileInfo({currentProfile}) {
    return (
        <div className="ProfileInfo">
            <h2>Current Displayed Profile</h2>
            <img width="500px" src={currentProfile.image} alt="" />
            <h3>{currentProfile.displayName}</h3>
            <p>Bio: {currentProfile.bio}</p>
            <p>Age: {currentProfile.age}</p>
            <p>Hobbies: {currentProfile.hobbies}</p>
        </div>
    )
}