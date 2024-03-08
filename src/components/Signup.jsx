import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/slice';
import FallingFlowers from '../animation/FallingFlowers';
import PopUpLoginCard from '../animation/PopUpLoginCard';
import { useNavigate, Link } from 'react-router-dom';
import '../css/signup.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignup = () => {
    dispatch(signup({ username, email, password }));
    navigate('/')
  };

  return (
    <div className='container'>
      {/* <FallingFlowers /> */}
      <div className='login-form'>
        <h2>Signup</h2><br />
        <label>Username</label><br />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label>Email</label><br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Password</label><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button onClick={handleSignup}>Signup</button>
        <p>already have an account? <span><Link to='/'><button className='buttonSignup'>Login</button></Link></span></p>
      </div>
    </div>
  );
};

export default Signup;
