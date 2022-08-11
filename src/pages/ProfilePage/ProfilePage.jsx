import { checkToken } from "../../utilities/users-service"
import * as userService from '../../utilities/users-service'
import ProfileForm from "../../components/ProfileForm/ProfileForm"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm"
import { useState } from "react"

export default function ProfilePage({user, profileItems, addProfile, currentProfile}) {
    const [updateProfile, setUpdateProfile] = useState(false)

    function updating() {
        setUpdateProfile(true)
        console.log("After clicking",updateProfile)
    }

    console.log(currentProfile)
    console.log("userId", user._id)

    let userName = user.name.charAt(0).toUpperCase() + user.name.slice(1)

    return (
        <div>
            <h1>Welcome, {userName}</h1>
            { currentProfile && !updateProfile ? 
            <ProfileInfo currentProfile={currentProfile} updating={updating}/>
            :
            currentProfile && updateProfile ?
            <EditProfileForm addProfile={addProfile} user={user} currentProfile={currentProfile}/>
            :
            <ProfileForm addProfile={addProfile} user={user}/>
            }
        </div>
    )
}