import { checkToken } from "../../utilities/users-service"
import * as userService from '../../utilities/users-service'
import ProfileForm from "../../components/ProfileForm/ProfileForm"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm"
import ConfirmDelete from "../../components/ConfirmDelete/ConfirmDelete"
import { useState } from "react"

export default function ProfilePage({user, addProfile, currentProfile, setCurrentProfile}) {
    const [updateProfile, setUpdateProfile] = useState(false)
    const [deleteProfile, setDeleteProfile] = useState(false)

    function updating() {
        setUpdateProfile(true)
        console.log("After clicking",updateProfile)
    }

    function deleting() {
        setDeleteProfile(true)
        console.log("After clicking delete button", deleteProfile)
    }

    let userName = user.name.charAt(0).toUpperCase() + user.name.slice(1)

    return (
        <div>
            <h1>Welcome, {userName}</h1>
            { currentProfile && !updateProfile && !deleteProfile ? 
            <ProfileInfo currentProfile={currentProfile} updating={updating} deleting={deleting} />
            :
            currentProfile && updateProfile ?
            <EditProfileForm addProfile={addProfile} user={user} currentProfile={currentProfile}/>
            :
            currentProfile && deleteProfile ?
            <ConfirmDelete setDeleteProfile={setDeleteProfile} setCurrentProfile={setCurrentProfile}/>
            :
            <ProfileForm addProfile={addProfile} user={user}/>
            }
        </div>
    )
}