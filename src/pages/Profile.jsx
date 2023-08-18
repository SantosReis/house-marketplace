import {useState, useEffect } from 'react'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth. currentUser.email,
  })

  const navigate = useNavigate()
  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }


  return (
    <div className="profile">
      <div className="profileHead">
        <p className="pageHeader">My Profile</p>
        <button type='button' className="logOut" onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Profile