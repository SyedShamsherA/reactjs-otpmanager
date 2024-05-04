import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Crud from '../assets/crud.png'
import './css/otpSidebar.css'

export default function PasswordSidebar() {
    const [ activeItem , setActiveitem ] = useState('Create Password');

    const handleClick = (item) => {
        setActiveitem(item)
    }

  return (
    <div className='sidebar'>
        <img src={Crud} alt='doughnut' />
        <ul>
        <li className={activeItem === 'Create Password' ? 'active' : ''}>
          <Link to="/createPassword" onClick={() => handleClick('Create Password')}>Create Password</Link>
        </li>
        <li className={activeItem === 'Get Password' ? 'active' : ''}>
          <Link to="/getPassword" onClick={() => handleClick('Get Password')}>Get Password</Link>
        </li>
        <li className={activeItem === 'Update Password' ? 'active' : ''}>
          <Link to="/updatePassword" onClick={() => handleClick('Update Password')}>Update Password</Link>
        </li>
        <li className={activeItem === 'Delete Password' ? 'active' : ''}>
          <Link to="/deletePassword" onClick={() => handleClick('Delete Password')}>Delete Password</Link>
        </li>
      </ul>
    </div>
  )
}
