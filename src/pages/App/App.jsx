import './App.css';
import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import AuthPage from "../AuthPage/AuthPage"
import { getUser } from "../../utilities/users-service" 
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';



export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      <div className="Page-Wrapper">
      { 
        user ? 
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/orders' element={<OrderHistoryPage />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
      <Footer />
      </div>
    </main>
  );
}


