import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        setUser(null)
    }

    return (
    <nav>
        <Link to="/orders">Profile</Link>
        <Link to="/home">Home</Link>
        <Link className="Title" to="/">TimeSup</Link>
        <span className='Welcome-msg'>Welcome, {user.name}</span>
        <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
    )
}