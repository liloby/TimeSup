import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import './NavBar.css'
import * as profileAPI from '../../utilities/profile-api'

export default function NavBar({ user, setUser, setCurrentProfile, setProfileItems}) {

    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        setUser(null)
        setCurrentProfile([])
        setProfileItems([])
    }

    async function handleGetProfile() {
        const profile = await profileAPI.getAll()
          setProfileItems(profile)
    }

    return (
    <nav>
        <Link to="/profile">Profile</Link>
        <Link onClick={handleGetProfile} className="Title" to="/">TimeSup</Link>
        <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
    )
}