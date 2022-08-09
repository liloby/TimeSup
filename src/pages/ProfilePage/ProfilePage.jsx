import { checkToken } from "../../utilities/users-service"
import * as userService from '../../utilities/users-service'
import ProfileForm from "../../components/ProfileForm/ProfileForm"

export default function ProfilePage({user, profileItems}) {

    const currentProfile = profileItems.find(item => item.user === user._id)

    console.log("userId", user._id)

    let userName = user.name.charAt(0).toUpperCase() + user.name.slice(1)

    return (
        <div>
            <h1>Welcome, {userName}</h1>
            { currentProfile ? 
            <h1>Already have profile</h1>
            :
            <ProfileForm />
            }
        </div>
    )
}