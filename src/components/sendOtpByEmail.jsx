import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendOtpByEmail } from '../redux/slice';
import './css/otp.css'

const SendOtpByEmail = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSendOtp = () => {
    dispatch(sendOtpByEmail({ email }));
  };

  return (
    <div className='otp'>
      <h2>Extract OTP</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <button className='otpButton' onClick={handleSendOtp}>Send OTP</button>
      <p className='pOtp'>(Note: with this form you can get otp as many times as you want, Also for validating otp, kindly visit password-manager page provided in the sidebar.)</p>
    </div>
  );
};

export default SendOtpByEmail;
