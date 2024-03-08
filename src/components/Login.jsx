import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await dispatch(login({ email, password }));
      const { token } = response.payload
      localStorage.setItem('token', token)
      navigate('/dashboard')
    } catch (error) {
      console.error('login error:', error)
    }
  };

  return (
    <div className='container'>
      <div className='login-form'>
        <h2>Login</h2>
        <label>Email</label><br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Password</label><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button onClick={handleLogin}>Login</button><br />
        {/* <Link to="/signup"><button>Don't have an account? Signup</button></Link> */}
        <p>Don't have an account? <span><Link to='/signup'><button className='buttonSignup'>Signup</button></Link></span></p>
      </div>
    </div>
  );
};

export default Login;
