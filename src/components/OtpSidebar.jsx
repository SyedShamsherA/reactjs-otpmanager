import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  Doughnut from '../assets/sidebarDoughnut.png'
import './css/otpSidebar.css'

export default function OtpSidebar() {
    const [ activeItem , setActiveitem ] = useState('Dashboard');

    const handleClick = (item) => {
        setActiveitem(item)
    }

  return (
    <div className='sidebar'>
        <img src={Doughnut} alt='doughnut' />
        <ul>
        <li className={activeItem === 'Dashboard' ? 'active' : ''}>
          <Link to="/dashboard" onClick={() => handleClick('Dashboard')}>Dashboard</Link>
        </li>
        <li className={activeItem === 'Password Manager' ? 'active' : ''}>
          <Link to="/otpValidation" onClick={() => handleClick('Password Manager')}>Password Manager</Link>
        </li>
        <li className={activeItem === 'Document' ? 'active' : ''}>
          <Link to="/document" onClick={() => handleClick('Document')}>Document</Link>
        </li>
      </ul>
    </div>
  )
}
