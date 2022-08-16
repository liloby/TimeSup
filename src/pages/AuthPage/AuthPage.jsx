import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from 'react';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <main>
            <nav className="login-nav">
            <div className="T">TimeSup</div>
            <div className='Logo'></div>
            <button className="change-auth-button" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
            </nav>
            <div className="login-wrapper">
            { showSignUp ?
            <SignUpForm setUser={setUser}/>
            :
            <LoginForm setUser={setUser} />
        }
        </div>
        </main>
    )
}