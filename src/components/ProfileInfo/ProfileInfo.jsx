import "./ProfileInfo.css"

export default function ProfileInfo({currentProfile, updating, deleting}) {



    return (
        <div className="ProfileInfo">
            <button onClick={updating} >Edit Profile</button>
            <button onClick={deleting}>Delete Profile</button>
            <h2>Current Displayed Profile</h2>
            <img width="500px" src={currentProfile.image} alt="" />
            <h3>{currentProfile.displayName}</h3>
            <p>Bio: {currentProfile.bio}</p>
            <p>Age: {currentProfile.age}</p>
            <p>Hobbies: {currentProfile.hobbies}</p>
        </div>
    )
}